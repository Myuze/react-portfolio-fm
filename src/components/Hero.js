import React from 'react';
import twice from '../img/twicetol.jpg';

export default function Hero() {

  return (
    <div className="app-hero">
      <h1 className="app-heading">Hero</h1>
      <img src={ twice } alt="TWICE" />
    </div>
  );
};
