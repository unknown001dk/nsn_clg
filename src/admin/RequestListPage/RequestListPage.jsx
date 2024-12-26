import React, { useEffect, useState } from "react";
import { toastError, toastSuccess } from "../../utils/Toast";
import "./RequestListPage.css";
import html2pdf from "html2pdf.js";

function RequestListPage() {
  const [routeChangeRequests, setRouteChangeRequests] = useState([]);

  // Fetch route change requests from the backend
  const fetchRequests = async () => {
    try {
      const response = await fetch(
        "http://localhost:8081/api/v1/route-change/route-change-requests"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch route change requests");
      }
      const data = await response.json();
      console.log(data);
      setRouteChangeRequests(data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Accept a request
  const acceptRequest = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/v1/route-change/route-change-request/${id}/accept`,
        { method: "PATCH" }
      );
      const result = await response.json();
      if (response.ok) {
        toastSuccess(result.message);
        fetchRequests(); // Refresh the list after accepting
      } else {
        toastError(result.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Reject a request
  const rejectRequest = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8081/api/v1/route-change/route-change-request/${id}/reject`,
        { method: "PATCH" }
      );
      const result = await response.json();
      if (response.ok) {
        toastSuccess(result.message);
        fetchRequests(); // Refresh the list after rejecting
      } else {
        toastError(result.error);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Generate and download the Route Form
  const downloadRequestForm = (request) => {
    const formContent = `
       <div style="font-family: Arial, sans-serif; line-height: 1.6; ">
       <img src="/images/logo.png" alt="logo" />
       <h2 style="text-align: center; color: black;">Permission Letter</h2>
      <p style="margin: 8px 0; font-weight: bold;">From:</p>
      <p style="margin-top: 10px; margin-left: 30px;">
        ${request.firstName}<br>
        ${request.year}, ${request.department}<br>
        NSN College of Engineering and Technology<br>
        Karur - 639003
      </p>
      <p style="margin-top: 20px; font-weight: bold;">To:</p>
      <p style="margin-top: 10px; margin-left: 30px;">
        The Transport Officer<br>
        NSN College of Engineering and Technology<br>
        Karur - 639003
      </p>
      <p style="margin-top: 20px; font-weight: bold;">Respected Sir/Madam,</p>
      <p style="margin-top: 10px; margin-left: 30px;">
        Sub: Change of bus route - Reg
      </p>
      <p style="margin-left: 20px; margin: 8px 0; text-indent: 30px;">
        With due respect, I would like to inform you that I wish to change 
        from Bus No. <span style="font-weight: 600;">${request.previousBusNo} </span> to Bus No. <span style="font-weight: 600;">${request.newBusNo} </span>
        due to <span style="font-weight: 600;">${request.purpose}</span>. 
        I kindly request you to grant me permission for this change.
      </p>
      <p style="margin-top: 20px; text-align: center;">Thank You.</p>
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <p style="margin: 8px 0;">
          Date:<br>
          Place: Karur
        </p>
        <div>
        <p style="margin: 8px 0; font-weight: bold;">Yours truly,</p>
        <p style="margin-top: 2px;">${request.firstName}</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 50px;">
        <p>HOD</p>
        <p>Transport Officer</p>
        <p>Principal</p>
      </div>
    </div>
    `;

    // Use html2pdf.js to generate the PDF
    const options = {
      margin: 1,
      filename: `Route_Change_Form_${request.uid}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(options).from(formContent).save();
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="request-list-container">
      <header>
        <h1>Route Change Requests</h1>
      </header>

      <table className="request-table">
        <thead>
          <tr>
            <th>UID</th>
            <th>Name</th>
            <th>Year</th>
            <th>Department</th>
            <th>Previous Route</th>
            <th>New Route</th>
            <th>Previous Bus No</th>
            <th>New Bus No</th>
            <th>Purpose</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {routeChangeRequests.length > 0 ? (
            routeChangeRequests.map((request) => (
              <tr key={request._id}>
                <td>{request.uid}</td>
                <td>{request.firstName}</td>
                <td>{request.year}</td>
                <td>{request.department}</td>
                <td>{request.previousRoute}</td>
                <td>{request.newRoute}</td>
                <td>{request.previousBusNo}</td>
                <td>{request.newBusNo}</td>
                <td>{request.purpose}</td>
                <td>
                  <button
                    onClick={() => acceptRequest(request._id)}
                    className="accept-btn"
                    disabled={request.status === "Accepted"}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => rejectRequest(request._id)}
                    className="reject-btn"
                    disabled={request.status === "Rejected"}
                  >
                    Reject
                  </button>
                  <button
                    onClick={() => downloadRequestForm(request)}
                    className="download-btn"
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No requests found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RequestListPage;
