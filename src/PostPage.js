import { useParams } from "react-router-dom";
import DataContext from "./Context/DataContext";
import { useContext } from "react";
import api from './api/posts';

const PostPage = () => {
    const { posts, setPosts, navigate } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find(post => (post.id) == id);

    const handleDelete = async (id) => {
        try {
            await api.delete(`posts/${post.id}`);
            const postsList = posts.filter(post => post.id !== id);
            setPosts(postsList)
            navigate('/')
        } catch (err) {
            console.log(err.message)
        }
    }

return (
    
    <main className="post-page">
        {post && <>
      <h2 className='post-title'>{post.postTitle}</h2>
            <p className='post-body'>{post.postBody}</p>
            <div className="btn-container">
            <button
                className='btn-edit-post'
                onClick={() => navigate(`/edytuj-post/${post.id}`)}>Edytuj Post</button>
            <button
            className='btn-delete-post'
            onClick={() => handleDelete(post.id)}
            >Usuń Post</button>
            </div></>}
            
    </main>
  )
}

export default PostPage
