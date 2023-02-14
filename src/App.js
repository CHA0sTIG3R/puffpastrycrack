import Pages from './pages/Pages';
import NavBar from './components/NavBar';
import {BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Pages />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
