import React, { useState } from "react";

export default function ContactLinks() {
  const contactLinks = [
    {
      name: "Github", loc: "https://github.com/Myuze"
    },
    {
      name: 'Linked In', loc: "https://www.linkedin.com/in/florian-meneses-02807b5/"
    },
    {
      name: 'Twitter', loc: "https://twitter.com/Myuze"
    }
  ];

  const [links, setLinks] = useState( contactLinks );

  return (
    <div className="contact-links">
      <ul>
        {links.map((link, i) => (
          <li className="link" key={i}>
            <a href={link.loc}>
              {`${link.name}`}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};