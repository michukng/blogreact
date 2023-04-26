import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const API_URL = 'http://localhost:3500'
    const [posts, setPosts] = useState([]);

    return (
        <DataContext.Provider value={{
            posts, setPosts, API_URL
        }}>
            {children}
            </DataContext.Provider>
    )
}

export default DataContext;