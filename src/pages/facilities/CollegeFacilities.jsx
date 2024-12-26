import React, { useState } from "react";
import "./CollegeFacilities.css";
import { facilities } from "../../data/facilities.js";

const CollegeFacilities = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  const openModal = (images) => {
    setModalImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImages([]);
  };

  return (
    <div className="college-facilities">
      <section className="intro">
        <h1>Welcome to NSN College of Engineering and Technology</h1>
        <p>
          At NSN College, we pride ourselves on providing world-class
          facilities designed to nurture creativity, critical thinking, and
          practical learning. Explore our state-of-the-art classrooms, labs, and
          other facilities that foster academic excellence.
        </p>
      </section>

      <section className="facilities-list">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="facility-card"
            onClick={() => openModal(facility.images)}
          >
            <img src={facility.image} alt={facility.name} className="facility-image" />
            <h2>{facility.name}</h2>
            <p>{facility.description}</p>
          </div>
        ))}
      </section>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
            <div className="modal-gallery">
              {modalImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Facility"
                  className="modal-image"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeFacilities;
