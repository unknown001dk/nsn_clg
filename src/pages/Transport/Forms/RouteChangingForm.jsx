import React, { useState } from "react";
import styles from "./RouteChangingForm.module.css";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../../../utils/Toast";

const RouteChangingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    uid: "",
    previousRoute: "",
    newRoute: "",
    previousBusNo: "",
    newBusNo: "",
    purpose: "",
    year: "",
    department: ""
  });

  const naviagate = useNavigate();
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleBack = () => {
    naviagate(history.back());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:8081/api/v1/route-change", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      toastSuccess("Route change request submitted successfully!");
      naviagate('/');
      // console.log(response);

      const data = await response.json();
      // console.log(data);
      if (response.ok) {
        setMessage("Route change request submitted successfully!");
        setFormData({
          firstName: "",
          uid: "",
          previousRoute: "",
          newRoute: "",
          previousBusNo: "",
          newBusNo: "",
          purpose: "",
          year: "",
          department: ""
        });
        console.log(data)
      } else {
        // setMessage(data.error || "Something went wrong. Please try again.");
        toastError("Something went wrong. Please try again.");
      }
    } catch (err) {
      // setMessage("Server error. Please try again later.");
      toastError("Server Error");
    }
  };

  return (
    <div className={styles.container}>
      <button className={styles.backButton} onClick={handleBack}>&larr;</button>
      <div className={styles.formWrapper}>
        <div className={styles.imageContainer}>
          <img
            src="https://via.placeholder.com/400x300"
            alt="College"
            className={styles.collegeImage}
          />
        </div>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>N.S.N COLLEGE OF ENGINEERING AND TECHNOLOGY</h1>
          <p className={styles.address}>
            NSN Kalvi Nagar, NH-7, Manalmedu, Karur-631003, TN, India
          </p>
          <h2 className={styles.formTitle}>Route Changing Form</h2>
          {message && <p className={styles.message}>{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Year</label>
              <input
                type="text"
                name="year"
                placeholder="Enter your year"
                value={formData.year}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Department</label>
              <input
                type="text"
                name="department"
                placeholder="Enter your department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>UID No</label>
              <input
                type="text"
                name="uid"
                placeholder="Enter your UID number"
                value={formData.uid}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Previous Bus Route</label>
              <input
                type="text"
                name="previousRoute"
                placeholder="Enter previous bus route"
                value={formData.previousRoute}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>New Bus Route</label>
              <input
                type="text"
                name="newRoute"
                placeholder="Enter new bus route"
                value={formData.newRoute}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Previous Bus No</label>
              <input
                type="text"
                name="previousBusNo"
                placeholder="Enter previous bus number"
                value={formData.previousBusNo}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>New Bus No</label>
              <input
                type="text"
                name="newBusNo"
                placeholder="Enter new bus number"
                value={formData.newBusNo}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Purpose</label>
              <textarea
                name="purpose"
                placeholder="State your purpose"
                rows="4"
                value={formData.purpose}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RouteChangingForm;
