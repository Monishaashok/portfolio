import React from "react";
import "./Projects.css";

function Projects() {
  const projectData = [
    {
      title: "Train Collision Avoidance",
      details: "RFID-based alert system using Arduino, designed to prevent train accidents."
    },
    {
      title: "Event Registration System",
      details: "Full-stack web app using React, Node.js, MongoDB for user registrations."
    },
    {
      title: "Fingerprint Blood Group Detection",
      details: "ML model that detects blood group from fingerprint image input."
    }
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="project-details">{project.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
