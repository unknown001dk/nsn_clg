import React, { useState } from "react";
import "./LoginForm.css";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toastError, toastSuccess } from "../../../utils/Toast";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post("http://localhost:8081/api/v1/users/login", { email, password })
      .then((response) => {
        // Access the response data
        console.log("Message:", response.data.message); // "User logged in successfully"
        // set session storage
        sessionStorage.setItem("token", response.data.data);
        toastSuccess(response.data.message);
        navigate("/admin-pannel");
      })
      .catch((error) => {
        console.error("Error:", error.response?.data.message || error.message);
      });
  };

  const handleForm = () => {
    if (!email || !password) {
      toastError("Please fill in all the fields.");
      return;
    }
    handleLogin();
  };

  return (
    <div className="login-page">
      <div className="branding-section">
        <div className="logo">
          <img
            src="https://via.placeholder.com/150" // Replace with your logo URL
            alt="Logo"
            className="logo-image"
          />
        </div>
        <h1 className="college-name">
          N.S.N COLLEGE OF ENGINEERING AND TECHNOLOGY
        </h1>
        <p className="address">
          N.S.N Kalvi Nagar, Karur-Madurai NH7, Karur-639003, TN, India <br />
          (Approved by AICTE, New Delhi, Affiliated to Anna University, Chennai)
        </p>
      </div>
      <div className="login-section">
        <div className="login-card">
          <h2 className="login-title">Admin Login</h2>
          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
              // handleLogin();
              handleForm();
            }}
          >
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  id="username"
                  placeholder="Enter your mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <FaLock className="input-icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="forgot-password">
              <a href="/forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className="login-button">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
