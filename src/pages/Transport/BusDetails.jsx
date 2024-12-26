import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./components/Header";
import styles from "./styles/Busdetails.module.css";

function BusDetails() {
  const buses = [
    { id: 1, name: "KARUR", image: "https://via.placeholder.com/150" },
    { id: 2, name: "MARAMPADI", image: "https://via.placeholder.com/150" },
    { id: 3, name: "THARAGAM", image: "https://via.placeholder.com/150" },
    { id: 4, name: "MULANOOR", image: "https://via.placeholder.com/150" },
    { id: 5, name: "PALANI", image: "https://via.placeholder.com/150" },
    { id: 6, name: "TIRUCHI", image: "https://via.placeholder.com/150" },
    { id: 7, name: "MADURAI", image: "https://via.placeholder.com/150" },
    { id: 8, name: "KARUR", image: "https://via.placeholder.com/150" },
    { id: 9, name: "COIMBATORE", image: "https://via.placeholder.com/150" },
    { id: 10, name: "SALEM", image: "https://via.placeholder.com/150" },
    { id: 11, name: "SJGA", image: "https://via.placeholder.com/150"},
    { id: 12, name: "KARUR", image: "https://via.placeholder.com/150" },
    { id: 13, name: "COIMBATORE", image: "https://via.placeholder.com/150" },
    { id: 14, name: "SALEM", image: "https://via.placeholder.com/150" },
    { id: 15, name: "SALEM", image: "https://via.placeholder.com/150" },
    { id: 16, name: "SALEM", image: "https://via.placeholder.com/150" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const cardsToShow = 4; // Number of cards visible at a time
  const navigate = useNavigate();

  const handleNext = () => {
    if (startIndex + cardsToShow < buses.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleViewMore = (bus) => {
    navigate(`/bus/${bus.id}`, { state: bus }); // Pass bus details via state
  };

  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.routeVerification}
      >
        <header className={styles.header}>
          <h1>ROUTE VERIFICATION</h1>
          <p>
            Find the buses and verify their routes with high safety and
            maintenance.
          </p>
          <div className={styles.stars}>
            <motion.span whileHover={{ scale: 1.2 }}>⭐</motion.span>
            <motion.span whileHover={{ scale: 1.2 }}>⭐</motion.span>
            <motion.span whileHover={{ scale: 1.2 }}>⭐</motion.span>
          </div>
        </header>

        <div className={styles.busContainer}>
          <motion.button
            className={styles.navBtn}
            onClick={handlePrev}
            disabled={startIndex === 0}
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowLeft />
          </motion.button>

          <div className={styles.busList}>
            {buses.slice(startIndex, startIndex + cardsToShow).map((bus) => (
              <motion.div
                key={bus.id}
                className={styles.busCard}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={bus.image}
                  alt={`Bus ${bus.id}`}
                  className={styles.busImage}
                />
                <h3>BUS No {bus.id}</h3>
                <p>{bus.name}</p>
                <motion.button
                  className={styles.viewMoreBtn}
                  onClick={() => handleViewMore(bus)}
                  whileHover={{ scale: 1.1 }}
                >
                  View More
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.button
            className={styles.navBtn}
            onClick={handleNext}
            disabled={startIndex + cardsToShow >= buses.length}
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowRight />
          </motion.button>
        </div>
      </motion.div>
    </>
  );
}

export default BusDetails;
