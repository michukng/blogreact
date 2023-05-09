import { useContext, useEffect } from 'react';
import DataContext from './Context/DataContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { posts, searchResult, setSearchResult, navigate } = useContext(DataContext);

  useEffect(() => {
    setSearchResult(posts);
  }, [posts]);

  return (
    <main className="Home">
      {posts.length > 0 &&
      <ul>
        {searchResult.map((post) =>
          <li key={post.id}>
            <h2 className='post-title'>{post.postTitle.length <= 10 ? post.postTitle : `${post.postTitle.slice(0,10)}...`}</h2>
            <p className='post-body'>{post.postBody.length <= 25 ? post.postBody : `${post.postBody.slice(0,25)}...`}</p>
            <button 
            className='btn-edit-post'
            onClick={() => navigate(`/posts/${post.id}`)}>Pokaż post</button>
          </li>
        )}
      </ul>}
      {posts.length === 0 && <p className='missing-posts'>Brak postów! <Link to='/dodaj-post'>Dodaj post!</Link></p>}
    </main>
  )
}

export default Home
