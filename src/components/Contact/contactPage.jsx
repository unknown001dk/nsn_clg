import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import styles from "./ContactPage.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={styles.contactPage}
    >
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Contact NSN College
      </motion.h1>

      {/* Contact Information */}
      <div className={styles.contactInfo}>
        {[
          {
            icon: <FaMapMarkerAlt className={styles.icon} />,
            title: "Address",
            details: [
              "NSN College of Engineering & Technology",
              "XYZ Road, ABC City, 600123",
            ],
          },
          {
            icon: <FaPhoneAlt className={styles.icon} />,
            title: "Phone",
            details: ["+91 12345 67890", "+91 98765 43210"],
          },
          {
            icon: <FaEnvelope className={styles.icon} />,
            title: "Email",
            details: ["info@nsncollege.edu", "admissions@nsncollege.edu"],
          },
        ].map((info, index) => (
          <motion.div
            key={index}
            className={styles.infoCard}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {info.icon}
            <h3>{info.title}</h3>
            {info.details.map((detail, idx) => (
              <p key={idx}>{detail}</p>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Inquiry Form */}
      <motion.div
        className={styles.formSection}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2>Send Us a Message</h2>
        <form className={styles.contactForm}>
          <motion.div
            className={styles.formGroup}
            whileFocus={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </motion.div>
          <motion.div
            className={styles.formGroup}
            whileFocus={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </motion.div>
          <motion.div
            className={styles.formGroup}
            whileFocus={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message"
            ></textarea>
          </motion.div>
          <motion.button
            type="submit"
            className={styles.submitButton}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>

      {/* Map Section */}
      <motion.div
        className={styles.mapSection}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <h2>Find Us Here</h2>
        <iframe
          title="NSN College Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.9469911383994!2d78.02481387451861!3d10.891633257059192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa25da78b28d23%3A0xba094fa31af5872a!2sN.S.N.%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1733176345493!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
