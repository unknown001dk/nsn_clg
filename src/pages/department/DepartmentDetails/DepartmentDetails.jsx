import React from "react";
import { Link, useParams } from "react-router-dom";
import "./DepartmentDetails.css"; // Ensure this CSS file is styled properly
import ScrollHeader from "../../../components/department/ScrollHeader";

const departmentDetails = {
  cse: {
    name: "Computer Science And Engineering",
    description: "Explore cutting-edge computer technologies.",
  },
  ai: {
    name: "Artificial Intelligence and Data Science",
    description: "Dive into the world of AI and Big Data.",
  },
  it: {
    name: "Information Technology",
    description: "Learn the latest trends in IT and software.",
  },
  ece: {
    name: "Electronics and Communication Engineering",
    description: "Build systems that connect the world.",
  },
  eee: {
    name: "Electrical and Electronics Engineering",
    description: "Master electrical systems and innovation.",
  },
  mech: {
    name: "Mechanical Engineering",
    description: "Design machines and transform industries.",
  },
  civil: {
    name: "Civil Engineering",
    description: "Design and construct structures.",
  },
  me_industrial: {
    name: "ME Industrial Safety",
    description: "Focus on safety in industrial environments.",
  },
  me_structural: {
    name: "ME Structural Engineering",
    description: "Specialize in structural design and analysis.",
  },
};

const DepartmentDetails = () => {
  const { deptId } = useParams();
  const department = departmentDetails[deptId];

  if (!department) {
    return (
      <div className="department-not-found">
        <h2>Department not found</h2>
        <p>Please select a valid department.</p>
      </div>
    );
  }

  return (
    <div className="department-page">
      <ScrollHeader />
      <div className="department-details-container">
        <h2>{department.name}</h2>
        <p>{department.description}</p>
      </div>
    </div>
  );
};

export default DepartmentDetails;
