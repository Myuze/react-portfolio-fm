import { Nav } from '.';

export default function Header() {
  const defaultPage = 'About';
  return (
    <header className='app-header'>
      <h1 className='name'>Florian Meneses</h1>
      <Nav currentPage={defaultPage} />
    </header>
  );
}
