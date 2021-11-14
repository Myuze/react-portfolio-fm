import '../sass/App.scss';
import React, { useState } from 'react';
import { Hero, Footer, Header, Nav } from '.';
import { Home, About, Portfolio, Contact } from './pages';

function Main() {
  const [currentPage, setCurrentPage] = useState('About');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="app">
      <header className="app-header">
        <Header />
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      <Hero />
      <div className="app-body">
        {renderPage()}
      </div>
        <Footer />
    </div>
  );
}

export default Main;
