import React from "react";
// import "./ScheduleTable.css";

const schedule = [
  { location: "Kaaniyalampatti", time: "7:15am" },
  { location: "Keeranur", time: "7:25am" },
  { location: "Semparaipatti", time: "7:30am" },
  { location: "Nallamuthupalayam", time: "7:48am" },
  { location: "Lanthakottai", time: "8:00am" },
  { location: "Manjanayakkanpatti", time: "8:10am" },
  { location: "P.Udayapatti", time: "8:24am" },
  { location: "Sinnathevanpatti", time: "8:35am" },
  { location: "Jegathabi", time: "8:45am" },
  { location: "Uppidamangalam", time: "8:50am" },
  { location: "Komalipatti", time: "8:58am" },
  { location: "Karaiyampatti", time: "9:00am" },
  { location: "Emoor", time: "9:05am" },
  { location: "NSN college", time: "9:15am" },
];

const ScheduleTable = () => {
  return (
    <div className="schedule-table">
      <h2>N.S.N College - Karur</h2>
      <h3>Bus No: 01</h3>
      <table>
        <thead>
          <tr>
            <th>Location</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td>{item.location}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="buttons">
        <button className="action-button">Member List</button>
        <button className="action-button">Register</button>
      </div>
    </div>
  );
};

export default ScheduleTable;
