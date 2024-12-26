import React from "react";
import "./styles/header.css"; // Assuming you're styling the header here
import Header from "./components/Header";

const Transport = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <div className="transport-description">
          <p>
            The college provides transportation facilities that cover all
            important points in and around the town to facilitate easy
            commuting for students and staff. The hostel students and staff
            will be dropped and picked up in the railway station or in the bus
            stand during holidays.
          </p>
          <img
            src="https://via.placeholder.com/1000x400"
            alt="Transport Facilities"
            className="transport-image"
          />
        </div>
      </main>
    </div>
  );
};

export default Transport;
