import React, { useEffect } from "react";
import "../styles/Skills.css";

function Skills() {
  useEffect(() => {
    const section = document.querySelector("#skills");
    setTimeout(() => section.classList.add("show"), 400);
  }, []);

  const skills = [
    "JavaScript", "Java", "ReactJS", "HTML", "CSS", "Bootstrap", "MUI", 
    "Storybook", "NodeJS", "Git", "Github", "Bitbucket", "JIRA", "Postman", "DBeaver"
  ];

  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card">{skill}</div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
