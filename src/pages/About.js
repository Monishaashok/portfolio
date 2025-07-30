import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          Hi, I'm <strong>Monisha A</strong>, a passionate and dedicated developer with a background in Electronics and Communication Engineering from <strong>M. Kumarasamy College of Engineering, Karur</strong>.
        </p>
        <p>
          I enjoy blending my knowledge in ECE with software development to build meaningful full-stack applications.
        </p>
        <p>
          I love taking on challenges, learning continuously, and solving real-world problems through technology.
        </p>
      </div>
      <div className="about-highlights">
        <div className="highlight-box">
          <h3>Undergraduate</h3>
          <p>B.E. Electronics and Communication Engineering</p>
          <p>M. Kumarasamy College of Engineering, Karur</p>
          <p>CGPA: 8.2</p>
        </div>
        <div className="highlight-box">
          <h3>Higher Secondary</h3>
          <p>SSVM Matriculation Higher Secondary School, Karur</p>
          <p>Percentage: 86.8%</p>
        </div>
         <div className="highlight-box">
          <h3>Secondary School</h3>
          <p>Little Angel's English Higher Secoundary School, Karur</p>
          <p>Percentage:70.5%</p>
        </div>
      </div>
    </section>
  );
}

export default About;
