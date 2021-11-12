import React from 'react';
import twice from '../img/twice-alcoholfree.jpg';

export default function Hero() {

  return (
    <div className="app-hero">
      <h1 className="app-heading">Hero</h1>
      <img src={ twice } alt="TWICE" />
    </div>
  );
};
