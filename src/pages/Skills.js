import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>

      {/* Frontend Card */}
      <div className="skill-category">
        <h3>Frontend</h3>
        <div className="skills-grid">
          <div className="skill-block">
            <h4>Programs Known</h4>
            <ul>
              <li>Java</li>
              <li>C</li>
            </ul>
          </div>
          <div className="skill-block">
            <h4>Tools & Frameworks</h4>
            <ul>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
          <div className="skill-block">
            <h4>Applications</h4>
            <ul>
              <li>Web Development</li>
              <li>UI Design</li>
            </ul>
          </div>
        </div>
      </div>

      {/* VLSI Design Card */}
      <div className="skill-category">
        <h3>VLSI Design</h3>
        <div className="skills-grid">
          <div className="skill-block">
            <h4>Languages</h4>
            <ul>
              <li>Verilog</li>
              <li>VHDL (Basics)</li>
            </ul>
          </div>
          <div className="skill-block">
            <h4>Tools</h4>
            <ul>
              <li>ModelSim</li>
              <li>Xilinx Vivado</li>
            </ul>
          </div>
          <div className="skill-block">
            <h4>Applications</h4>
            <ul>
              <li>RTL Design</li>
              <li>Simulation</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Soft Skills as Separate Section */}
      <div className="skill-category">
        <h3>Soft Skills</h3>
        <div className="skills-grid">
          <div className="skill-block">
            <h4>Personal Qualities</h4>
            <ul>
              <li>Team Work</li>
              <li>Time Management</li>
              <li>Critical Thinking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
