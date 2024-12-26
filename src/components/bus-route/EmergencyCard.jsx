import React from "react";
import { FiPhoneCall } from "react-icons/fi";
// import "./EmergencyCard.css";

const EmergencyCard = () => {
  return (
    <div className="emergency-card">
      <div className="icon">
        <FiPhoneCall size={30} />
      </div>
      <div>
        <h4>Emergency calls only</h4>
        <p>+91 8870641062</p>
        <small>Only call for critical and heavy emergency only</small>
      </div>
    </div>
  );
};

export default EmergencyCard;
