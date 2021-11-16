import React, { useState } from 'react';

export default function Resume() {
  const techStack = [
    "Express",
    "Handlebars",
    "React",
    "MySQL",
    "MongoDB",
    "Node.js",
  ]

  const languages = [
    "Javascript",
    "C#",
    "Python"
  ]

  const resume = {
    link: process.env.PUBLIC_URL + '/content/resume/MenesesFlorian_Resume.pdf'
  }

  const [tech, setTechStack] = useState( techStack );
  const [language, setLanguages] = useState( languages );
  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>
        <a className="resume-link" href={resume.link}><strong>Download Resume</strong></a>
      </p>
      <h2>Tech Stack</h2>
      <div className="tech-stack-container">
        <ul className="tech-stack">
          {tech.map((tech, i) => (
            <li key={i}>
              {`${tech}`}
            </li>
          ))}
        </ul>
        <ul className="languages">
          {language.map((language, i) => (
            <li key={i}>
              {`${language}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
