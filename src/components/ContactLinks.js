import React, { setState, useState } from "react";

export default function ContactLinks() {
  const [links, setLinks] = useState(['Github', 'Linked In', 'Twitter']);

  return (
    <>
      <ul>
        {links.map((link, i) => (
          <li className="link" key={i}>
            {`${link}`}
          </li>
        ))}
      </ul>
    </>
  );
};