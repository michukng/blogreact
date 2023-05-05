import { useParams } from "react-router-dom";
import DataContext from "./Context/DataContext";
import { useContext, useEffect } from "react";
import api from './api/posts';

const EditPost = () => {
    const { posts, setPosts, emptyBody, setEmptyBody, emptyTitle, setEmptyTitle, editBody, setEditBody, editTitle, setEditTitle, navigate } = useContext(DataContext);
    const { id } = useParams();
    const post = posts.find(post => (post.id) == id);
    const postBodyLength = editBody.length ? editBody.length : 0;
    const postTitleLength = editTitle.length ? editTitle.length : 0;
    
    useEffect(() =>{
        setEmptyTitle('empty-title-disabled');
        setEmptyBody('empty-body-disabled');
        if (post) {
            setEditTitle(post.postTitle);
            setEditBody(post.postBody);
        }
    }, [post, setEditTitle, setEditBody])

    const handleEdit = async (id) => {
        if (!editTitle && !editBody) {
            setEmptyTitle('empty-title-enabled');
            setEmptyBody('empty-body-enabled'); 
        } else if (!editTitle) {
            setEmptyTitle('empty-title-enabled');
            setEmptyBody('empty-body-disabled');
        } else if (!editBody) {
            setEmptyTitle('empty-title-disabled');
            setEmptyBody('empty-body-enabled');
        } else {
            const editPost = {
                id,
                postTitle: editTitle,
                postBody: editBody
            }
            try {
                const response = await api.put(`/posts/${id}`, editPost);
                setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
                setEditTitle('');
                setEditBody('');
                navigate(`/posts/${id}`)
            } catch (err) {
                console.log(err.message);
            }
        }
    }
  return (
    <main className="post-page">
      {post && <><form className="add-post-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="postTitle" className="postTitle-label">
            Tytuł
        </label>
        <input
            type="text"
            maxLength={25} 
            required
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
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
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
        />
        <p className={emptyBody}>To pole nie może zostać puste!</p>
        <p>{postBodyLength}/400</p>
        <button
            className="btn-edit-post"
            onClick={()=> handleEdit(post.id)}>
            Edytuj post
        </button>
      </form></>}
    </main>
  )
}

export default EditPost
