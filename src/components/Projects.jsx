import React, { useEffect } from "react";
import "../styles/Projects.css";

function Projects() {
  useEffect(() => {
    const section = document.querySelector("#projects");
    setTimeout(() => section.classList.add("show"), 800);
  }, []);

  const projects = [
    {
      title: "HR Employee Recommendation System",
      desc: "Web app using HTML, CSS, Bootstrap, PHP, and SQL. Implemented ML algorithms to recommend employees and predict salary."
    },
    {
      title: "Portfolio Website",
      desc: "Personal responsive React portfolio showcasing my skills, projects, and experience."
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, i) => (
          <div key={i} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
