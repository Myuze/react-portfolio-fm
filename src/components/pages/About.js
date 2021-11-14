import React, { useState } from 'react';

export default function About() {
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

  const [tech, setTechStack] = useState( techStack );
  const [language, setLanguages] = useState( languages );
  return (
    <div className="about">
      <h1>About Page</h1>
      <p>
        Passionate gaming industry veteran, working with tool and automation frameworks. Burgeoning Full Stack Developer.
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
