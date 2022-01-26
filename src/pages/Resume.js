import { Languages, TechStack } from './components';

export default function Resume() {
  const resume = {
    link: process.env.PUBLIC_URL + '/content/resume/MenesesFlorian_Resume.pdf',
  };

  return (
    <div className='resume'>
      <h1>Resume</h1>
      <p>
        <a className='resume-link' href={resume.link}>
          <strong>Download Resume</strong>
        </a>
      </p>
      <TechStack />
      <Languages />
    </div>
  );
}
