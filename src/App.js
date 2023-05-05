import './index.css';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './Context/DataContext';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import PostPage from './PostPage';
import AddPost from './AddPost';
import EditPost from './EditPost';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dodaj-post" element={<AddPost />} />
          <Route path="/edytuj-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostPage />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
