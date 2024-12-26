import React from "react";
import "./TransportOfficers.css";
import Header from "./components/Header";

const TransportOfficers = () => {
  const officers = [
    {
      name: "Dr. Suresh R.",
      role: "Principal",
      photo: "./images/pic-1.jpg", // Replace with a real URL if available
      contact: "+91-9876543210",
      email: "principal@nsncollege.edu",
    },
    {
      name: "Mr. Ravi Kumar",
      role: "Placement Officer",
      photo: "./images/person-2.jpg", // Replace with a real URL if available
      contact: "+91-9876543211",
      email: "ravi.kumar@nsncollege.edu",
    },
    {
      name: "Ms. Priya Sharma",
      role: "Transport In-Charge",
      photo: "https://via.placeholder.com/300x200?text=Transport+In-Charge", // Replace with a real URL if available
      contact: "+91-9876543212",
      email: "priya.sharma@nsncollege.edu",
    },
    {
      name: "Ms Sharma",
      role: "Transport In-Charge",
      photo: "https://via.placeholder.com/300x200?text=Transport+In-Charge", // Replace with a real URL if available
      contact: "+91-9876543212",
      email: "priya.sharma@nsncollege.edu",
    },
  ];

  return (
    <>
    <Header />
      <div className="transport-officers">
        <h1 className="page-title">Transport Officers</h1>
        <p className="page-description">
          Meet the team responsible for managing the transportation facilities
          at our college.
        </p>
        <div className="officer-cards">
          {officers.map((officer, index) => (
            <div className="officer-card" key={index}>
              <div className="card-image-wrapper">
                <img
                  src={officer.photo}
                  alt={`${officer.name}`}
                  className="officer-photo"
                />
              </div>
              <div className="officer-details">
                <h3>{officer.name}</h3>
                <p className="role">{officer.role}</p>
                <p className="contact">
                  <strong>Contact:</strong> {officer.contact}
                </p>
                <p className="email">
                  <strong>Email:</strong> {officer.email}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TransportOfficers;
