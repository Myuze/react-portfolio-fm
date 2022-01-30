import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav(defaultPage) {
  const [currentPage, setCurrentPage] = useState({ defaultPage });
  const [active, setActive] = useState('active');
  const tabList = ['About', 'Portfolio', 'Resume', 'Contact'];

  return (
    <ul className='nav nav-tabs'>
      {tabList.map((tab, i) => (
        <li className={`nav-item ${active}`} key={i}>
          <Link
            to={`${tab}`}
            onClick={() => setCurrentPage(tab)}
          >{`${tab}`}</Link>
        </li>
      ))}
    </ul>
  );
}
