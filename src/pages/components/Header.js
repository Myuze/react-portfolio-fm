import React from 'react';
import { Nav } from '.';

export default function Header({ currentPage, handlePageChange }) {

  return (
    <header className="app-header">
      <h1 className="name">Florian Meneses</h1>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  );
};