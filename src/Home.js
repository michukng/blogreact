import { useEffect, useContext } from 'react';
import DataContext from './Context/DataContext';

const Home = () => {

  const { posts, setPosts, API_URL } = useContext(DataContext);

  useEffect(() => {

    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/posts`);
        const listPosts = await response.json();
        setPosts(listPosts);
      } catch (err) {
        console.log(err)
      }
    }

    fetchPosts();
  }, [])
  console.log(posts); 
  return (
    <main className="Home">
      <ul>
        {posts.map((post) =>
          <li key={post.id}>
            <h2 className='post-title'>{post.postTitle.length <= 10 ? post.postTitle : `${post.postTitle.slice(0,10)}...`}</h2>
            <p className='post-body'>{post.postBody.length <= 25 ? post.postBody : `${post.postBody.slice(0,25)}...`}</p>
            <button className='btn-edit-post'>Edytuj Post</button>
            <button className='btn-delete-post'>Usuń Post</button>
          </li>
        )}
      </ul>
    </main>
  )
}

export default Home
