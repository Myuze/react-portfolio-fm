import { useState } from 'react';

export default function Languages() {
  const languages = ['Javascript', 'C#', 'Python', 'Java', 'Typescript'];

  const [language, setLanguages] = useState(languages);

  return (
    <ul className='languages'>
      {language.map((language, i) => (
        <li key={i}>{`${language}`}</li>
      ))}
    </ul>
  );
}
