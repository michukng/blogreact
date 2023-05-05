import { useContext, useEffect } from "react";
import DataContext from "./Context/DataContext";
import api from './api/posts';

const AddPost = () => {
    const { posts, setPosts, postBody, setPostBody, emptyBody, setEmptyBody, emptyTitle, setEmptyTitle, postTitle, setPostTitle, navigate } = useContext(DataContext);

    const postBodyLength = postBody.length ? postBody.length : 0;
    const postTitleLength = postTitle.length ? postTitle.length : 0;

    useEffect(() =>{
        setEmptyTitle('empty-title-disabled');
        setEmptyBody('empty-body-disabled');
        setPostTitle('');
        setPostBody('');
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!postTitle && !postBody) {
            setEmptyTitle('empty-title-enabled');
            setEmptyBody('empty-body-enabled'); 
        } else if (!postTitle) {
            setEmptyTitle('empty-title-enabled');
            setEmptyBody('empty-body-disabled');
        } else if (!postBody) {
            setEmptyTitle('empty-title-disabled');
            setEmptyBody('empty-body-enabled');
        } else {
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
        <p className={emptyTitle}>To pole nie może zostać puste!</p>
        <p>{postTitleLength}/25</p>
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
        <p className={emptyBody}>To pole nie może zostać puste!</p>
        <p>{postBodyLength}/400</p>
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
