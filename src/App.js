import Pages from './pages/Pages';
import NavBar from './components/NavBar';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Pages />
      </div>
    </BrowserRouter>
  );
}

export default App;
