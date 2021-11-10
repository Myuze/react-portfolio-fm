import './sass/App.scss';
import { Hero, Footer, Header, Nav } from './components/';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Header />
        <Nav />
      </header>
      <Hero />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
