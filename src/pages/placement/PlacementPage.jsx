import React from "react";
import styles from "./PlacementPage.module.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const coordinators = [
  {
    name: "Dr. Arun Kumar",
    designation: "Head of Placements",
    email: "arun.kumar@nsncollege.edu",
    phone: "+91 98765 43210",
    linkedin: "https://linkedin.com/in/arunkumar",
  },
  {
    name: "Ms. Priya Sharma",
    designation: "Placement Officer",
    email: "priya.sharma@nsncollege.edu",
    phone: "+91 87654 32109",
    linkedin: "https://linkedin.com/in/priyasharma",
  },
];

const PlacementPage = () => {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: { color: "#333", font: { size: 14 } },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#333" },
      },
      y: {
        ticks: { color: "#333" },
        grid: { color: "#e0e0e0" },
      },
    },
  };

  const chartData = {
    labels: ["2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Placement Success Rate (%)",
        data: [85, 88, 92, 95],
        backgroundColor: "rgba(34, 139, 34, 0.7)", // Slightly transparent green
        hoverBackgroundColor: "rgba(34, 139, 34, 1)",
      },
    ],
  };

  return (
    <div className={styles.placementPage}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Welcome to the Placement Cell</h1>
        <p>
          At NSN College of Engineering and Technology, we bridge the gap
          between academia and the corporate world, offering stellar placement
          opportunities and training programs.
        </p>
      </div>

      {/* Chart Section */}
      <motion.div
        className={styles.chartSection}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Placement Statistics</h2>
        <h3>Yearly Placement Success Rate</h3>
        <Bar options={chartOptions} data={chartData} />
      </motion.div>

      {/* Coordinators Section */}
      <div className={styles.cardContainer}>
        {coordinators.map((coordinator, index) => (
          <motion.div
            className={styles.card}
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3>{coordinator.name}</h3>
            <p>{coordinator.designation}</p>
            <p>
              <strong>Email:</strong> {coordinator.email}
            </p>
            <p>
              <strong>Phone:</strong> {coordinator.phone}
            </p>
            <div className={styles.icons}>
              <a
                href={coordinator.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className={styles.icon} />
              </a>
              <a href={`mailto:${coordinator.email}`}>
                <FaEnvelope className={styles.icon} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PlacementPage;
