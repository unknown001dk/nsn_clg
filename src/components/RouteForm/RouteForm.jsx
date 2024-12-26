import React from "react";
import "./RouteForm.css";

function RouteForm() {
  return (
    <div>
      <div className="form">
        <p>From: </p>
        <div className="inner-text">
          <p>{name}</p>
          <p>{year}, {department}E</p>
          <p>NSN College of Engineering and Technology</p>
          <p>Karur - 639003</p>
        </div>
        <p>To: </p>
        <div className="inner-text">
          <p>The Transport Officer</p>
          <p>NSN College of Engineering and Technology</p>
          <p>Karur - 639003</p>
        </div>
        <p>Respected Sir,</p>
        <div className="inner-text">
          <p>Sub: Change of bus route - Reg</p>
        </div>
        <span>
          With due respect, I would like to inform you that I wish to change
          from Bus No. {PreviousBusNumber} to Bus No. {newBusNumber} due to personal {purpose}. I kindly request
          you to grant me permission for this change.
        </span>

        <div>
          <p className="text-center">Thank You</p>
        </div>
        <div className="flex">
          <div>
            <p>Date:</p>
            <p>Place: Karur</p>
          </div>
          <div>
            <p>Your's truly,</p>
          </div>
        </div>
        <div className="signatures">
          <p>HOD</p>
          <p>Transport</p>
          <p>Principal</p>
        </div>
      </div>
    </div>
  );
}

export default RouteForm;
