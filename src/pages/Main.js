import React, { useState } from 'react';
import { Hero, Footer, Header } from './components';
import { Resume, About, Portfolio, Contact } from '../pages';

export default function Main() {
  let pages = [Resume, About, Portfolio, Contact];

  return (
    <div className='app'>
      <Header />
      <Hero />
      <div className='app-body'>{pages[0]()}</div>
      <Footer />
    </div>
  );
}
