import { useState } from 'react';

export default function TechStack() {
  const techStack = [
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'MySQL',
    'Handlebars',
  ];

  const [tech, setTechStack] = useState(techStack);

  return (
    <ul className='tech-stack'>
      {tech.map((tech, i) => (
        <li key={i}>{`${tech}`}</li>
      ))}
    </ul>
  );
}
