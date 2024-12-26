import React from "react";
import { useParams, Link } from "react-router-dom";
// import { departmentsData } from "../../data/departmentsData.js";
import "./DepartmentPage.css";

const DepartmentPage = () => {
  const departmentsData = {
    "Mechanical Engineering": {
      description: `The department was established in 2011...`,
      image: "https://via.placeholder.com/300",
      cards: [
        {
          title: "VISION",
          content: "To impart futuristic technical education...",
        },
        {
          title: "MISSION",
          content: "To create an environment fostering growth...",
        },
      ],
    },
    "Civil Engineering": {
      description: `Civil Engineering involves designing...`,
      image: "https://via.placeholder.com/300",
      cards: [
        {
          title: "VISION",
          content: "To construct sustainable infrastructure...",
        },
        {
          title: "MISSION",
          content: "Focus on environmental impact...",
        },
      ],
    },
  };
  const { departmentName } = useParams(); // Get department name from the URL
  const department = departmentsData[departmentName];

  if (!department) {
    return (
      <div className="department-not-found">
        <h1>Department Not Found</h1>
        <Link to="/" className="back-home">
          Back to Departments
        </Link>
      </div>
    );
  }

  return (
    <div className="department-page">
      <Link to="/" className="back-home">
        &larr; Back to Departments
      </Link>
      <h1>{departmentName}</h1>
      <img
        src={department.image}
        alt={`${departmentName} department`}
        className="department-image"
      />
      <p dangerouslySetInnerHTML={{ __html: department.description }}></p>
      <div className="dpt-card-container">
        {department.cards.map((card, index) => (
          <div key={index} className="info-card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPage;
