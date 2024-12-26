import React, { useState } from 'react';
import './AdmissionPage.css';

const AdmissionPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    phone: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log(formData);
  };

  return (
    <div className="admission-page">
      <h1>Admission to NSN College of Engineering and Technology</h1>

      <p className="admission-description">
        Welcome to the admissions page of NSN College of Engineering and Technology. 
        We offer a wide range of engineering programs aimed at shaping the leaders of tomorrow. 
        Please fill out the form below to apply for your desired course.
      </p>

      {formSubmitted ? (
        <div className="thank-you-message">
          <h2>Thank You for Your Application!</h2>
          <p>Our admissions team will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="admission-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="course">Choose Your Course</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select a course</option>
              <option value="CSE">Computer Science Engineering</option>
              <option value="IT">Information Technology</option>
              <option value="ECE">Electronics and Communication</option>
              <option value="EEE">Electrical and Electronics</option>
              <option value="Civil">Civil Engineering</option>
              <option value="Mech">Mechanical Engineering</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Additional Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit Application
          </button>
        </form>
      )}

      <div className="admission-info">
        <h2>Admissions Process</h2>
        <p>
          The admissions process at NSN College is designed to be straightforward and transparent. 
          Our goal is to provide you with all the necessary tools and guidance to apply seamlessly.
        </p>
        <ol>
          <li>Fill out the online application form.</li>
          <li>Submit necessary documents (Mark Sheets, Certificates, etc.).</li>
          <li>Attend the counseling process if selected.</li>
          <li>Complete the fee payment to secure admission.</li>
        </ol>
      </div>

      <div className="course-info">
        <h2>Available Courses</h2>
        <p>NSN College offers the following undergraduate programs in various engineering disciplines:</p>
        <ul>
          <li><strong>Computer Science Engineering (CSE)</strong>: A 4-year program focused on computer programming, data structures, and software development.</li>
          <li><strong>Information Technology (IT)</strong>: A 4-year program designed to equip students with the skills needed for the modern tech industry.</li>
          <li><strong>Electronics and Communication Engineering (ECE)</strong>: A program emphasizing electronics, communication systems, and microprocessors.</li>
          <li><strong>Electrical and Electronics Engineering (EEE)</strong>: A program focused on electrical power systems, circuits, and energy efficiency.</li>
          <li><strong>Civil Engineering</strong>: This 4-year program covers the design, construction, and maintenance of infrastructure.</li>
          <li><strong>Mechanical Engineering</strong>: A program focused on mechanical systems, thermodynamics, and materials science.</li>
        </ul>
      </div>

      <div className="eligibility-criteria">
        <h2>Eligibility Criteria</h2>
        <p>
          To be eligible for admission to any of the programs at NSN College, candidates must meet the following requirements:
        </p>
        <ul>
          <li>Minimum 60% marks in 12th grade or equivalent (for undergraduate courses).</li>
          <li>Valid entrance exam scores (JEE, COMEDK, or any other state-level entrance exam as applicable).</li>
          <li>For postgraduate courses, a valid GATE or equivalent score is required.</li>
        </ul>
      </div>

      <div className="fees-structure">
        <h2>Fee Structure</h2>
        <p>The fee structure varies by course and category. Below is a general overview of the fee structure:</p>
        <ul>
          <li><strong>Undergraduate Courses (General Category)</strong>: INR 1,00,000 per year</li>
          <li><strong>Postgraduate Courses</strong>: INR 1,50,000 per year</li>
          <li>Additional fees for hostel and transportation are applicable.</li>
        </ul>
      </div>

      <div className="faq-section">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq-item">
          <h3>How can I apply for admission?</h3>
          <p>You can apply directly through our website by filling out the online application form.</p>
        </div>
        <div className="faq-item">
          <h3>What documents are required for admission?</h3>
          <p>Required documents include your 12th-grade mark sheet, entrance exam scorecard, and ID proof.</p>
        </div>
        <div className="faq-item">
          <h3>What is the deadline for applying?</h3>
          <p>The application deadline is typically in June for the academic year starting in August. Please check our admissions page for specific dates.</p>
        </div>
        <div className="faq-item">
          <h3>Do you offer scholarships?</h3>
          <p>Yes, NSN College offers merit-based scholarships to eligible students. Please refer to our scholarship page for more details.</p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
