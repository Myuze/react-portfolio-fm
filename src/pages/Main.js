import React, { useState } from 'react';
import { Hero, Footer, Header } from './components';
import { Resume, About, Portfolio, Contact } from '../pages';

export default function Main() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='app'>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <Hero />
      <div className='app-body'>{renderPage()}</div>
      <Footer />
    </div>
  );
}
