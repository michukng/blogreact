import { useContext, useEffect } from 'react';
import DataContext from './Context/DataContext';

const Nav = () => {
    const { navigate, posts, searchPost, setSearchPost, searchResult, setSearchResult } = useContext(DataContext);

    useEffect(() => {
      const filteredResults = posts.filter(post =>
        post.postTitle.toLowerCase().includes(searchPost.toLowerCase())
      );
      setSearchResult(filteredResults);
    }, [posts, searchPost, setSearchResult]);

  return (
    <nav>
      <button onClick={() => navigate('/')}>
        Strona główna
      </button>
      <button onClick={() => navigate('/dodaj-post')}>
        Dodaj post
      </button>
      <input 
        type="text"
        placeholder='Wyszukaj post po tytule...'
        value={searchPost}
        onChange={(e) => setSearchPost(e.target.value)}
      />
    </nav>
  )
}

export default Nav
