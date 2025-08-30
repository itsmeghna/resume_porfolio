import React, { useEffect } from "react";
import "../styles/Experience.css";

function Experience() {
  useEffect(() => {
    const section = document.querySelector("#experience");
    setTimeout(() => section.classList.add("show"), 600);
  }, []);

  const experiences = [
    {
      role: "Developer",
      company: "Entiovi Technologies",
      year: "June 2023 – Present",
      details: [
        "Developed and maintained custom reusable UI components with React, HTML, CSS, and Bootstrap.",
        "Implemented features in React + Node.js with Material-UI.",
        "Built multi-stage truck tracking features improving logistics visibility.",
        "Worked on Recruitment Management System with responsive UIs.",
        "Fetched & handled API data using Axios with robust error handling.",
        "Communicated with clients & deployed applications to Production."
      ],
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div key={i} className="exp-card">
            <h3>{exp.role} | {exp.company}</h3>
            <span className="year">{exp.year}</span>
            <ul>
              {exp.details.map((point, j) => <li key={j}>{point}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
