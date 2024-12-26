import React from "react";
import { FaChevronRight } from "react-icons/fa";
// import "./ContactButtons.css";

const ContactButtons = () => {
  const buttons = ["Student Incharge", "Staff Incharge", "Driver Contact"];

  return (
    <div className="contact-buttons">
      {buttons.map((btn, index) => (
        <button key={index} className="contact-button">
          {btn}
          <FaChevronRight />
        </button>
      ))}
    </div>
  );
};

export default ContactButtons;
