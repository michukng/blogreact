import './index.css';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
