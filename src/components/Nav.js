import React, { useState } from 'react';

export default function Nav() {

  const [links, setLinks] = useState(['About Me', 'Portfolio', 'Resume', 'Contact Me']);

  return (
    <nav className="nav">{ links }</nav>
  );
};
