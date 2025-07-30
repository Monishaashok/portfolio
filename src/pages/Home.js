import React from "react";
import "./Home.css"; // Make sure this file exists in the same folder

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="greeting">Hello, I'm</p>
          <h1 className="name">Monisha A</h1>
          <button
            className="download-btn"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            Download Resume
          </button>
        </div>
        <div className="hero-image">
          <img src="/profile.jpg" alt="Monisha" />
        </div>
      </div>
    </section>
  );
}

export default Home;
