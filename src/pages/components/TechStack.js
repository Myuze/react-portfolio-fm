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

  const [tech, setTechStack] = useState(techStack);

  return (
    <ul className='tech-stack'>
      {tech.map((tech, i) => (
        <li key={i}>{`${tech}`}</li>
      ))}
    </ul>
  );
}
