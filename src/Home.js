import { useContext } from 'react';
import DataContext from './Context/DataContext';


const Home = () => {
  const { posts, navigate } = useContext(DataContext);


  // const handleDelete = (id) => {
  //   const listPosts = posts.filter((post) => post.id !== id);
  //   setPosts(listPosts);

  //   const deleteOptions = {
  //     method: 'DELETE'
  //   };
  //   const req
  // }

  return (
    <main className="Home">
      <ul>
        {posts.map((post) =>
          <li key={post.id}>
            <h2 className='post-title'>{post.postTitle.length <= 10 ? post.postTitle : `${post.postTitle.slice(0,10)}...`}</h2>
            <p className='post-body'>{post.postBody.length <= 25 ? post.postBody : `${post.postBody.slice(0,25)}...`}</p>
            <button 
            className='btn-edit-post'
            onClick={() => navigate(`/posts/${post.id}`)}>Pokaż post</button>
          </li>
        )}
      </ul>
    </main>
  )
}

export default Home
