import { useContext } from "react";
import DataContext from "./Context/DataContext";
import api from './api/posts';

const AddPost = () => {
    const { posts, setPosts, postBody, setPostBody, postTitle, setPostTitle, navigate } = useContext(DataContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const newPost = {
            id: id,
            postTitle: postTitle,
            postBody: postBody
        }
        try {
            const response = await api.post('/posts', newPost);
            const allPosts = [...posts, response.data];
            setPosts(allPosts);
            setPostTitle('');
            setPostBody('');
            navigate(`/posts/${id}`)
        } catch (err) {
            console.log(err.message);
        }
    }

  return (
    <main className="post-page">
      <form className="add-post-form">
        <label htmlFor="postTitle" className="postTitle-label">
            Tytuł
        </label>
        <input
            type="text"
            maxLength={25} 
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody" className="postBody-label">
            Treść
        </label>
        <textarea
            id="postBody"
            required
            maxLength={400}
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
        />
        <button
            className="btn-edit-post"
            onClick={handleSubmit}>
            Dodaj post
        </button>
      </form>
    </main>
  )
}

export default AddPost
