import { useState } from 'react';

export default function TechStack() {
  const techStack = [
    'Express',
    'Handlebars',
    'React',
    'MySQL',
    'MongoDB',
    'Node.js',
  ];

  const languages = ['Javascript', 'C#', 'Python'];

  const [tech, setTechStack] = useState(techStack);
  const [language, setLanguages] = useState(languages);

  return (
    <div>
      <h2>Tech Stack</h2>
      <div className='tech-stack-container'>
        <ul className='tech-stack'>
          {tech.map((tech, i) => (
            <li key={i}>{`${tech}`}</li>
          ))}
        </ul>
        <ul className='languages'>
          {language.map((language, i) => (
            <li key={i}>{`${language}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
