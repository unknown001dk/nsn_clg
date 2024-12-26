import React, { useState } from "react";
import "./Administration.css";
import { adminSections } from "../../data/adminData.js";

const Administration = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="administration-page">
      <h1 className="admin-title">Administration</h1>
      {adminSections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="admin-section">
          <h2 className="section-title">{section.title}</h2>
          <div className="admin-grid">
            {section.members.map((member, memberIndex) => (
              <div
                className="admin-card"
                key={memberIndex}
                onClick={() => handleCardClick(member)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="admin-image"
                />
                <h3 className="admin-name">{member.name}</h3>
                <h4 className="admin-position">{member.position}</h4>
                <p className="admin-message">{member.message}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedMember && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content animate-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close-modal" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="modal-image"
            />
            <h2 className="modal-name">{selectedMember.name}</h2>
            <h3 className="modal-position">{selectedMember.position}</h3>
            <p className="modal-message">{selectedMember.message}</p>
            <h4>Achievements:</h4>
            <ul className="modal-achievements">
              {selectedMember.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Administration;
