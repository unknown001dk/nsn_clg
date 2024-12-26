import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Faculty.css"; // Ensure you style this file
import ScrollHeader from "../../../components/department/ScrollHeader";
import { facultyData } from "../../../data/FaculityData";
const Faculty = () => {
  const { deptId } = useParams();
  const facultyMembers = facultyData[deptId];

  if (!facultyMembers) {
    return (
      <div className="faculty-not-found">
        <h2>Faculty not found</h2>
        <p>Please select a valid department to view faculty members.</p>
      </div>
    );
  }

  return (
    <div className="faculty-page">
      <ScrollHeader />

      {/* Faculty Details Section */}
      <div className="faculty-details-container">
        <h2>Faculty Members - {deptId.toUpperCase()}</h2>
        <div className="faculty-list">
          {facultyMembers.map((faculty, index) => (
            <div key={index} className="faculty-item">
              <div className="faculty-photo">
                <img
                  // src={faculty.photo}
                  src="../images/staff.jpg"
                  alt={faculty.name}
                />
              </div>
              <div className="faculty-info">
                <h3>{faculty.name}</h3>
                <p className="role">{faculty.role}</p>
                <p>
                  <strong>Years of Experience:</strong> {faculty.yearsOfWorking}
                </p>
                <p>
                  <strong>Qualification:</strong> {faculty.qualification}
                </p>
                <p>
                  <strong>Position:</strong> {faculty.position}
                </p>
              </div>
              <hr className="faculty-divider" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
