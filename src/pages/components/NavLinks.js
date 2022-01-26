export default function NavLinks({ currentPage, handlePageChange }) {
  return (
    <ul className='nav nav-tabs'>
      <li className='nav-item'>
        <a
          href='#about'
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#folio'
          onClick={() => handlePageChange('Folio')}
          className={currentPage === 'Folio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#resume'
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className='nav-item'>
        <a
          href='#contact'
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
}
