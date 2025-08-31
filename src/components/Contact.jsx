import React, { useEffect } from "react";
import "../styles/Contact.css";

function Contact() {
  useEffect(() => {
    const section = document.querySelector("#contact");
    setTimeout(() => section.classList.add("show"), 1200);
  }, []);

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-info">
          {/* <p>📞 <b>+91 8981374652</b></p> */}
          <p>📧 <b>meghnas2198@gmail.com</b></p>
          <p>🌍 Kolkata, India</p>
          <p>
            🔗 <a href="https://www.linkedin.com/in/meghnas21" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message 🚀</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
