import { Routes, Route } from 'react-router-dom';

import { Hero, Footer, Header } from './components';
import { Resume, About, Portfolio, Contact } from '../pages';

export default function Main() {
  return (
    <div className='app'>
      <Header />
      <Hero />
      <Routes>
        <Route exact path='/' element={<About />} />
        <Route exact path='About' element={<About />} />
        <Route exact path='Resume' element={<Resume />} />
        <Route exact path='Portfolio' element={<Portfolio />} />
        <Route exact path='Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
