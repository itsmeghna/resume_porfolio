import React, { useEffect } from "react";
import "../styles/Education.css";

function Education() {
  useEffect(() => {
    const section = document.querySelector("#education");
    setTimeout(() => section.classList.add("show"), 1000);
  }, []);

  const education = [
    { degree: "M.Sc. in Computer Science", place: "Asutosh College (CU)", score: "DGPA: 7.78" },
    { degree: "B.Sc. in Computer Science", place: "New Alipore College (CU)", score: "60.2%" },
    { degree: "Science with Computer Applications", place: "Sree Sarada Ashram Balika Vidyalaya", score: "71.6%" },
  ];

  return (
    <section id="education" className="education">
      <h2>Education</h2>
      <ul>
        {education.map((edu, i) => (
          <li key={i} className="edu-card">
            <h3>{edu.degree}</h3>
            <span>{edu.place}</span> — <b>{edu.score}</b>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
