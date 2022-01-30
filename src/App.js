import { BrowserRouter as NavRouter } from 'react-router-dom';
import './sass/App.scss';
import Main from './pages/Main';

export default function App() {
  return (
    <NavRouter>
      <Main />
    </NavRouter>
  );
}
