import React, { useState, useEffect } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Import the autotable plugin

const Member = () => {
  const [requests, setRequests] = useState([]); // To store API data
  const [searchQuery, setSearchQuery] = useState(""); // To track the search input
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage errors
  const [currentPage, setCurrentPage] = useState(1); // To manage the current page
  const [itemsPerPage] = useState(5); // Items per page (5 per page)

  // Fetch data from the API using Axios
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/v1/student/getStudent"
        );
        setRequests(response.data); // Store the fetched data
        setLoading(false); // Stop loading
      } catch (err) {
        setError(err.message); // Set the error message
        setLoading(false); // Stop loading
      }
    };

    fetchRequests();
  }, []);

  // Filter requests based on the search query
  const filteredRequests = requests.filter((request) => {
    return (
      request.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.year.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.busNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.busStop.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.gender.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Pagination logic: Determine the start and end indices for the current page
  const indexOfLastRequest = currentPage * itemsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - itemsPerPage;
  const currentRequests = filteredRequests.slice(
    indexOfFirstRequest,
    indexOfLastRequest
  );

  // Handle page navigation
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Print functionality
  const handlePrint = () => {
    const printContent = document.getElementById("printable-content");
    const printWindow = window.open("", "_blank", "width=800,height=600");
    printWindow.document.write("<html><head><title>Print</title>");
    printWindow.document.write("<style>");
    printWindow.document.write(`
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
      }
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        border: 1px solid #000;
        padding: 8px;
        text-align: left;
      }
      th {
        background-color: #f2f2f2;
      }
      h2 {
        text-align: center;
      }
      .print-button {
        display: none;
      }
      @media print {
        body, html {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
        }
        .container {
          width: 100%;
          max-width: 100%;
        }
        .table-wrapper {
          width: 100%;
          page-break-before: always;
        }
      }
    `);
    printWindow.document.write("</style>");
    printWindow.document.write("</head><body>");
    printWindow.document.write("<h2>Filtered Member List</h2>");
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  // PDF Download functionality
  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Define the table headers
    const headers = [
      [
        "First Name",
        "UID",
        "Category",
        "Department",
        "Gender",
        "Parent Number",
        "Bus Number",
        "Bus Stop",
        "Year",
        "Contact Number",
      ],
    ];

    // Extract table data dynamically
    const data = filteredRequests.map((request) => [
      request.firstName,
      request.uid,
      request.category,
      request.department,
      request.gender,
      request.parentContact,
      request.busNumber,
      request.busStop,
      request.year,
      request.contactNo,
    ]);

    // Add a title to the PDF
    doc.text("Filtered Member List", 14, 15);

    // Add the table
    doc.autoTable({
      head: headers,
      body: data,
      startY: 20, // Position the table below the title
      theme: "grid", // Add grid-style borders
      styles: {
        fontSize: 10,
        cellPadding: 2,
      },
      headStyles: {
        fillColor: [22, 160, 133], // Custom header background color
        textColor: [255, 255, 255],
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245], // Light grey for alternate rows
      },
      margin: { top: 20 }, // Margin at the top of the table
    });

    // Save the PDF with a filename
    doc.save("filtered_member_list.pdf");
  };

  // Conditional rendering based on loading, error, and data availability
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <h2>MemberList</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Search by name, UID, or bus number..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Print button styled */}
      <button onClick={handlePrint} className="print-button">
        Print
      </button>
      <button onClick={handleDownloadPDF} className="print-button">
        Download
      </button>

      <div className="table-wrapper">
        <div id="printable-content">
          <table className="responsive-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>UID</th>
                <th>Category</th>
                <th>Department</th>
                <th>Gender</th>
                <th>Parent Number</th>
                <th>Bus Number</th>
                <th>Bus Stop</th>
                <th>Year</th>
                <th>ContactNumber</th>
              </tr>
            </thead>
            <tbody>
              {currentRequests.length > 0 ? (
                currentRequests.map((request) => (
                  <tr key={request._id}>
                    <td>{request.firstName}</td>
                    <td>{request.uid}</td>
                    <td>{request.category}</td>
                    <td>{request.department}</td>
                    <td>{request.gender}</td>
                    <td>{request.parentContact}</td>
                    <td>{request.busNumber}</td>
                    <td>{request.busStop}</td>
                    <td>{request.year}</td>
                    <td>{request.contactNo}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" style={{ textAlign: "center" }}>
                    No matching requests found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[
          ...Array(Math.ceil(filteredRequests.length / itemsPerPage)).keys(),
        ].map((number) => (
          <button
            key={number}
            onClick={() => paginate(number + 1)}
            className={currentPage === number + 1 ? "active" : ""}
          >
            {number + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filteredRequests.length / itemsPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Member;
