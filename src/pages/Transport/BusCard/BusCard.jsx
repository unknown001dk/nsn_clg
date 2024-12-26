import React, { useEffect, useState } from "react";
import styles from "./BusCard.module.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const BusCard = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [filters, setFilters] = useState({ year: "", department: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Fetch Data from API
  useEffect(() => {
    fetch("http://localhost:8081/api/v1/student/getStudent")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setFilteredStudents(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter Students
  const handleSearch = () => {
    const { year, department } = filters;
    const filtered = students.filter(
      (student) =>
        (year ? student.year === year : true) &&
        (department
          ? student.department.toLowerCase().includes(department.toLowerCase())
          : true)
    );
    setFilteredStudents(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // Download All Cards as Single PDF
  const downloadAllCardsPDF = () => {
    const input = document.getElementById("cards-container");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 297; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("all_student_id_cards.pdf");
    });
  };

  // Print Cards
  const printCards = () => {
    window.print();
  };

  // Calculate Paginated Students
  const paginatedStudents = filteredStudents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.mainCard}>
      {/* Search Section */}
      <div className={styles.searchSection}>
        <h2>Search Students</h2>
        <input
          type="text"
          name="year"
          placeholder="Year (e.g., 2)"
          value={filters.year}
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type="text"
          name="department"
          placeholder="Department (e.g., CSE)"
          value={filters.department}
          onChange={handleInputChange}
          className={styles.input}
        />
        <button onClick={handleSearch} className={styles.searchBtn}>
          Search
        </button>
        <button onClick={downloadAllCardsPDF} className={styles.downloadBtn}>
          Download
        </button>
        <button onClick={printCards} className={styles.printBtn}>
          Print
        </button>
      </div>

      {/* Cards Container */}
      <div id="cards-container" className={styles.cardsContainer}>
        {paginatedStudents.length > 0 ? (
          paginatedStudents.map((student) => (
            <div className={styles["id-card"]} key={student.uid}>
              {/* Header Section */}
              <div className={styles.header}>
                <img
                  src="/images/logo.png"
                  alt="Logo"
                  className={styles.logo}
                />
                <div className={styles["college-info"]}>
                  <h1>N.S.N. COLLEGE</h1>
                  <h4>OF ENGINEERING & TECHNOLOGY</h4>
                  <p>NH-7, Manalmedu, Karur - 639 003.</p>
                  <p>Phone: 04324 293777, 293999</p>
                  <p className={styles.iso}>
                    An ISO 9001-2008 Certified Institution
                  </p>
                </div>
                <h2 className={styles["id-title"]}>BUS CARD</h2>
              </div>

              {/* Photo Section */}
              <div className={styles["photo-section"]}>
                <img
                  src="https://via.placeholder.com/120x150.png?text=Photo"
                  alt="Student Photo"
                  className={styles["student-photo"]}
                />
              </div>

              {/* Student Details */}
              <div className={styles["student-details"]}>
                <pre>
                  <strong>Name   : </strong> {student.firstName}
                </pre>
                <pre>
                  <strong>Dept   : </strong> {student.department}
                </pre>
                <pre>
                  <strong>UID NO : </strong> {student.uid}
                </pre>
                <pre>
                  <strong>Year   : </strong> {student.year}
                </pre>
                <pre>
                  <strong>Bus NO : </strong> {student.busNumber}
                </pre>
                <pre>
                  <strong>STOP   : </strong> {student.busStop}
                </pre>
              </div>

              {/* Footer */}
              <div className={styles.footer}>
                <div className={styles["footer-details"]}>
                  <span className={styles.principal}>Principal</span>
                </div>
                <p className={styles.website}>www.nsn.ac.in</p>
              </div>
            </div>
          ))
        ) : (
          <p>No students found</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className={styles.page}>
          Page {currentPage} of{" "}
          {Math.ceil(filteredStudents.length / itemsPerPage)}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              prev < Math.ceil(filteredStudents.length / itemsPerPage)
                ? prev + 1
                : prev
            )
          }
          disabled={
            currentPage === Math.ceil(filteredStudents.length / itemsPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BusCard;
