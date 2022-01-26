import gura from '../img/gura.png';

export default function About() {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <div className='info'>
        <p>
          Passionate gaming industry veteran, working with tool and automation
          frameworks. Burgeoning Full Stack Developer.
        </p>
        <img id='avatar' src={gura} alt='Gura Avatar' />
      </div>
    </div>
  );
}
