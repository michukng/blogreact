import './index.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
