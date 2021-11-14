import React, { useState } from "react";

export default function ContactLinks() {
  const [links, setLinks] = useState(['Github', 'Linked In', 'Twitter']);

  return (
    <div className="contact-links">
      <ul>
        {links.map((link, i) => (
          <li className="link" key={i}>
            {`${link}`}
          </li>
        ))}
      </ul>
    </div>
  );
};