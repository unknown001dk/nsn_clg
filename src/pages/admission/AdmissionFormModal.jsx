import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaCheck, FaTimes } from "react-icons/fa";
import "./AdmissionFormModal.css";
import AdmissionPage from "./AdmissionPage";
import GalleryPage from "../gallery/GalleryPage";

const AdmissionFormModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState('');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setStep(1); // Reset to step 1 when modal is closed
    setFormData('');
  };
  
  const url = "http://localhost:8081/api/v1/users/admission";
  const handleNextStep = () => {
    if (step === 2) {
      // On the final step, log the form data and move to the success message
      console.log("Form Data:", formData);
      // fetch database
      api();
      setStep(step + 1); // Move to step 3 (Success message)
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const api = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
     .then((response) => response.json())
     .then((data) => console.log("Success:", data))
     .catch((error) => console.error("Error:", error));
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Close the modal when clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal();
    }
  };

  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={openModal} className="apply-btn">
        Apply Now
      </button>
      <GalleryPage />

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            {/* Close Icon */}
            <span className="close-icon" onClick={closeModal}>
              <FaTimes />
            </span>

            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div>
                <h2 className="modal-header">Personal Information</h2>
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input-field"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field"
                />
                <select
                  name="gender"
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="" selected hidden>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input-field"
                />
                <button onClick={handleNextStep} className="modal-btn next-btn">
                  Next <FaArrowRight />
                </button>
              </div>
            )}

            {/* Step 2: Select Course */}
            {step === 2 && (
              <div>
                <h2 className="modal-header">Select Your Course</h2>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="" selected hidden>Select Course</option>
                  <option value="cse">Computer Science (CSE)</option>
                  <option value="ece">Electronics & Communication (ECE)</option>
                  <option value="eee">Electrical Engineering (EEE)</option>
                  <option value="it">Information Technology (IT)</option>
                  <option value="civil">Civil Engineering (CIVIL)</option>
                  <option value="mech">Mechanical Engineering (MECH)</option>
                  <option value="aids">
                    Artifical intelligence & data structure (AI&DS)
                  </option>
                </select>
                <div className="modal-footer">
                  <button
                    onClick={handlePrevStep}
                    className="modal-btn prev-btn"
                  >
                    <FaArrowLeft /> Previous
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="modal-btn next-btn"
                  >
                    Finish <FaCheck />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Thank You Message */}
            {step === 3 && (
              <div className="success-message">
                <h2>🎉 Success! 🎉</h2>
                <p>Thank you for applying! We'll get in touch with you soon.</p>
                <button onClick={closeModal} className="modal-btn close-btn">
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdmissionFormModal;
