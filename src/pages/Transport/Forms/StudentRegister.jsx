import React, { useState } from "react";
import Header from "../components/Header"; // Import Header component
import styles from "./RegisterPage.module.css"; // Import page-specific styles
import axios from "axios"; // Import Axios for HTTP requests
import { toastError, toastSuccess } from "../../../utils/Toast";

function StudentRegister() {
  const [formData, setFormData] = useState({
    category: "",
    firstName: "",
    busStop: "",
    uid: "",
    year: "",
    department: "",
    gender: "",
    busNumber: "",
    parentContact: "",
    busStop: "",
    contactNo: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/api/v1/student/register",
        formData
      );
      // setMessage(response.data.message || "Registration successful");
      toastSuccess(response.data.message || "Registration successful");
      // Reset the form
      setFormData({
        category: "",
        firstName: "",
        uid: "",
        year: "",
        busNumber: "",
        department: "",
        gender: "",
        parentContact: "",
        busStop: "",
        contactNo: "",
      });
    } catch (error) {
      toastError("Error while registering student/staff");
    }
  };

  const {
    category,
    firstName,
    uid,
    year,
    department,
    gender,
    parentContact,
    busStop,
    contactNo,
  } = formData;

  return (
    <>
      <Header />
      <div className={styles.registerPage}>
        <div className={styles.registerContainer}>
          <div className={styles.registerLeft}>
            <button className={styles.backButton}>←</button>
            <h1>JOIN US</h1>
            <div className={styles.logo}>
              <img
                src="https://via.placeholder.com/1000x400"
                alt="Logo"
                className={styles.logoImage}
              />
            </div>
          </div>

          <div className={styles.registerRight}>
            <h2>Register Here</h2>
            <form className={styles.registerForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div>
                  <label>Category</label>
                  <select
                    name="category"
                    value={category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Student">Student</option>
                    <option value="Staff">Staff</option>
                  </select>
                </div>
              </div>

              {category && (
                <div className={styles.formRow}>
                  <div>
                    <label>First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}

              {/* Fields for Students */}
              {category === "Student" && (
                <>
                  <div className={styles.formRow}>
                    <div>
                      <label>UID No</label>
                      <input
                        type="text"
                        name="uid"
                        placeholder="Enter your UID number"
                        value={uid}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label>Year</label>
                      <select
                        name="year"
                        value={year}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Year</option>
                        <option value="1st Year">1st Year</option>
                        <option value="2nd Year">2nd Year</option>
                        <option value="3rd Year">3rd Year</option>
                        <option value="4th Year">4th Year</option>
                      </select>
                    </div>
                    <div>
                      <label>Department</label>
                      <select
                        name="department"
                        value={department}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Department</option>
                        <option value="CSE">CSE</option>
                        <option value="EEE">EEE</option>
                        <option value="ECE">ECE</option>
                        <option value="MECH">MECH</option>
                        <option value="CIVIL">CIVIL</option>
                        <option value="IT">IT</option>
                        <option value="AI&DS">AI&DS</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div>
                      <label>Gender</label>
                      <select
                        name="gender"
                        // value={gender}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                    </div>
                    <div>
                      <label>Parent Contact</label>
                      <input
                        type="text"
                        name="parentContact"
                        placeholder="Enter parent's contact"
                        value={parentContact}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Fields for Staff */}
              {category === "Staff" && (
                <div className={styles.formRow}>
                  <div>
                    <label>Bus Stop</label>
                    <input
                      type="text"
                      name="busStop"
                      placeholder="Enter bus stop name"
                      value={busStop}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label>Contact Number</label>
                    <input
                      type="text"
                      name="contactNo"
                      placeholder="Enter phone number"
                      value={contactNo}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
              )}

              <div className={styles.formRow}>
                <div>
                  <label>Bus Number</label>
                  <input
                    type="text"
                    name="busNumber"
                    // value={busNumber}
                    onChange={handleInputChange}
                    placeholder="Enter bus number"
                    required
                  />
                </div>
                <div>
                  <label>Bus Stop</label>
                  <input
                    type="text"
                    name="busStop"
                    // value={busStop}
                    onChange={handleInputChange}
                    placeholder="Enter bus Stop name"
                    required
                  />
                </div>
              </div>

              <div>
                <label>Contact Number</label>
                <input
                  type="text"
                  name="contactNo"
                  value={contactNo}
                  onChange={handleInputChange}
                  placeholder="Enter contact number"
                  required
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Register
              </button>

              {message && <p className={styles.message}>{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentRegister;
