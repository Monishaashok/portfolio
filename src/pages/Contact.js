import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-cards">
        <div className="contact-card">
          <h3>Email</h3>
          <p><a href="mailto:monishashok2104@gmail.com">monishashok2104@gmail.com</a></p>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          <p><a href="tel:+918637499771">+91 86374 99771</a></p>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <p><a href="https://linkedin.com/in/monisha2121" target="_blank" rel="noreferrer">linkedin.com/in/monisha</a></p>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <p><a href="https://github.com/Monishaashok" target="_blank" rel="noreferrer">github.com/monisha</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
