import React, { useEffect } from "react";
import Profile from "../assets/profile.jpg";
import "../styles/About.css";

function About() {
  useEffect(() => {
    const section = document.querySelector("#about");
    setTimeout(() => section.classList.add("show"), 200);
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Experienced Software Developer with 2+ years of experience in building and 
            maintaining quality software products. Strong command over React, JavaScript, 
            HTML, CSS, and Java. Proficient with tools like Git, JIRA, and Postman. 
            Passionate about contributing to dynamic teams and continuously enhancing 
            technical skills.
          </p>
        </div>
        <div className="about-image">
          <img src={Profile} alt="Meghna" />
        </div>
      </div>
    </section>
  );
}

export default About;
