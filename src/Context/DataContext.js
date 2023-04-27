import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosFetch from "../hooks/useAxiosFetch";


const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const API_URL = 'http://localhost:3500'
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

    useEffect(() => {
        setPosts(data)
    }, [data])

    return (
        <DataContext.Provider value={{
            posts, setPosts, API_URL, navigate
        }}>
            {children}
            </DataContext.Provider>
    )
}

export default DataContext;