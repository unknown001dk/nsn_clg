import React, { useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import styles from "./styles/BusDetailsPage.module.css";
import { motion } from "framer-motion";
import { sampleData } from "../../data/BusDetails";
import { FaUser, FaPhone, FaCaretDown, FaCaretUp } from "react-icons/fa";
import AdminPanel from "../../admin/AdminPanel";

const BusDetailsPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [expandedContact, setExpandedContact] = useState(null);

  const bus = location.state || {
    id,
    name: `Route ${id}`,
    image: "https://via.placeholder.com/150",
  };

  const routeData = sampleData[bus.id] || sampleData.default;

  const toggleContact = (contact) => {
    setExpandedContact((prev) => (prev === contact ? null : contact));
  };

  const handleNavigate = () => {
    navigate("/member-list");
  };

  const handleRegister = () => {
    navigate("/student-register");
  };

  const handleNavigateToMemberList = () => {
    navigate("/member-list", { state: { busId: bus.id, routeData } });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.busDetailsPage}
      >
        <div className={styles.gap}>
          <button onClick={() => navigate(-1)} className={styles.backBtn}>
            Back
          </button>
          <button onClick={handleRegister} className={styles.registerBtn}>
            Register
          </button>
        </div>
        {/* Back Button */}
        <h1>Details for Bus Route {bus.id}</h1>
        <div className={styles.detailsContainer}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <img src={bus.image} alt={bus.name} className={styles.busImage} />
            <h2>{bus.name}</h2>
            <p>
              <strong>Description:</strong> {routeData.description}
            </p>
            <p>
              <strong>Timing:</strong> {routeData.timing}
            </p>

            <div className={styles.contactDetails}>
              <h3>Key Contacts</h3>

              {/* Student Incharge */}
              <div
                className={styles.contactItem}
                onClick={() => toggleContact("studentIncharge")}
              >
                <div className={styles.contactHeader}>
                  <FaUser className={styles.icon} />
                  <span>Student Incharge</span>
                  {expandedContact === "studentIncharge" ? (
                    <FaCaretUp className={styles.caretIcon} />
                  ) : (
                    <FaCaretDown className={styles.caretIcon} />
                  )}
                </div>
                {expandedContact === "studentIncharge" && (
                  <div className={styles.contactDetailsBody}>
                    <p>
                      <strong>Name:</strong> {routeData.studentIncharge.name}
                    </p>
                    <p>
                      <FaPhone className={styles.icon} />{" "}
                      {routeData.studentIncharge.mobile}
                    </p>
                  </div>
                )}
              </div>

              {/* Staff Incharge */}
              <div
                className={styles.contactItem}
                onClick={() => toggleContact("staffIncharge")}
              >
                <div className={styles.contactHeader}>
                  <FaUser className={styles.icon} />
                  <span>Staff Incharge</span>
                  {expandedContact === "staffIncharge" ? (
                    <FaCaretUp className={styles.caretIcon} />
                  ) : (
                    <FaCaretDown className={styles.caretIcon} />
                  )}
                </div>
                {expandedContact === "staffIncharge" && (
                  <div className={styles.contactDetailsBody}>
                    <p>
                      <strong>Name:</strong> {routeData.staffIncharge.name}
                    </p>
                    <p>
                      <FaPhone className={styles.icon} />{" "}
                      {routeData.staffIncharge.mobile}
                    </p>
                  </div>
                )}
              </div>

              {/* Driver */}
              <div
                className={styles.contactItem}
                onClick={() => toggleContact("driver")}
              >
                <div className={styles.contactHeader}>
                  <FaUser className={styles.icon} />
                  <span>Driver</span>
                  {expandedContact === "driver" ? (
                    <FaCaretUp className={styles.caretIcon} />
                  ) : (
                    <FaCaretDown className={styles.caretIcon} />
                  )}
                </div>
                {expandedContact === "driver" && (
                  <div className={styles.contactDetailsBody}>
                    <p>
                      <strong>Name:</strong> {routeData.driver.name}
                    </p>
                    <p>
                      <FaPhone className={styles.icon} />{" "}
                      {routeData.driver.mobile}
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className={styles.emergencyCard}>
              <h1>Emergency Contacts</h1>
              <p>
                <b>Name:</b> Dineshkumar
              </p>
              <p>
                <b>Phone:</b> +91 9361318372
              </p>
              <p>
                <b>Address:</b> 123 Main St, City, State, Zip
              </p>
            </div>
            <div className={styles.gap}>
              {/* <button onClick={handleNavigateToMemberList} className={styles.memberBtn}>Memeber list</button> */}
              {/* <button onClick={handleRegister} className={styles.registerBtn}>
                Register
              </button> */}
            </div>
          </div>

          {/* Right Content (Table) */}
          <div className={styles.rightContent}>
            <h3>Stops</h3>
            <table className={styles.stopsTable}>
              <thead>
                <tr>
                  <th>Stop</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {routeData.stops.map((stop, index) => (
                  <tr key={index}>
                    <td>{stop.stop}</td>
                    <td>{stop.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
      {/* <AdminPanel /> */}
    </>
  );
};

export default BusDetailsPage;
