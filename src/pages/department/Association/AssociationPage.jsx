import React from "react";
import "./Association.css"; // CSS for updated design
import ScrollHeader from "../../../components/department/ScrollHeader";
import { useParams } from "react-router-dom";

const associations = [
  {
    name: "Coding Club",
    description:
      "A community of students passionate about coding, hackathons, and innovation.",
    image: "coding-club.jpg",
    events: ["Hackathon 2024", "Weekly Coding Challenges", "Guest Lectures"],
  },
  {
    name: "AI & Robotics Club",
    description:
      "Focusing on AI advancements and robotics innovations, connecting students with emerging tech.",
    image: "ai-robotics.jpg",
    events: ["AI Workshops", "Robotics Competition", "Project Showcases"],
  },
  {
    name: "Cultural Club",
    description:
      "Celebrating diversity and talents through cultural events and activities.",
    image: "cultural-club.jpg",
    events: ["College Fest", "Dance Competitions", "Drama Nights"],
  },
  {
    name: "Mechanical Society",
    description:
      "Engaging mechanical engineering students in hands-on projects and workshops.",
    image: "mechanical-society.jpg",
    events: ["Industrial Visits", "Design Challenges", "Seminars"],
  },
];

const AssociationPage = () => {
  const { deptId } = useParams('');
  console.log(deptId)
  const { departmentName } = useParams(); // Get department name from the URL

  return (
    <>
      <div className="association-page">
      <ScrollHeader />
        <header className="association-header">
          <h1>Our Associations</h1>
          <p>
            Discover a vibrant community of clubs and societies at our college!
          </p>
        </header>
        <div className="association-grid">
          {associations.map((assoc, index) => (
            <div className="glass-card" key={index}>
              <div className="card-image">
                <img
                  // src={require(`./assets/${assoc.image}`)}
                  src="../images/demo-img.jpg" 
                  alt={assoc.name}
                  className="image"
                />
              </div>
              <div className="card-content">
                <h2>{assoc.name}</h2>
                <p>{assoc.description}</p>
                <div className="events">
                  <h4>Upcoming Events:</h4>
                  <ul>
                    {assoc.events.map((event, idx) => (
                      <li key={idx}>{event}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AssociationPage;
