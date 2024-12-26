import React from "react";
import { Link } from "react-router-dom";
import "./DepartmentList.css"; // Import the CSS file
import { departmentInfo } from "../../../data/departments.js";

const DepartmentList = () => {
  return (
    <div className="department-container">
      <h2 className="department-heading">Explore Our Departments</h2>
      <div className="department-grid">
        {departmentInfo.map((dept) => (
          <Link
            to={`/departments/${dept.id}`}
            key={dept.id}
            className="department-card"
          >
            <div className="department-icon">{dept.icon}</div>
            <div className="department-name">{dept.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DepartmentList;
