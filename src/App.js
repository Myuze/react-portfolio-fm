import './sass/App.scss';
import { Body, Footer, Header, Nav } from './components/';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header><Nav /> </Header>
        <Body />
        <Footer />
      </header>
    </div>
  );
}

export default App;
