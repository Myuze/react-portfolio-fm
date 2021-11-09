import logo from './logo.svg';
import './sass/App.scss';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';


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
