import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";


const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const API_URL = 'http://localhost:3500'
    const [posts, setPosts] = useState([]);
    const [postBody, setPostBody] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [editTitle, setEditTitle] = useState("");
    const [editBody, setEditBody] = useState("");
    const [emptyTitle, setEmptyTitle] = useState("empty-title-disabled");
    const [emptyBody, setEmptyBody] = useState("empty-body-disabled");
    const [searchPost, setSearchPost ] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const navigate = useNavigate();

    const { data } = useAxiosFetch('http://localhost:3500/posts');

    useEffect(() => {
        setPosts(data)
    }, [data])

    return (
        <DataContext.Provider value={{
            posts, setPosts, API_URL, navigate,
            postBody, setPostBody,
            postTitle, setPostTitle,
            emptyTitle, setEmptyTitle,
            emptyBody, setEmptyBody,
            editTitle, setEditTitle,
            editBody, setEditBody,
            searchPost, setSearchPost,
            searchResult, setSearchResult
        }}>
            {children}
            </DataContext.Provider>
    )
}

export default DataContext;