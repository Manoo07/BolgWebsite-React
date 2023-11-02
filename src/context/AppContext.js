import { createContext } from "react";
import { useState } from "react";
import {baseUrl} from '../baseUrl'

export const AppContext = createContext();

function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    const value = {
        loading,setLoading,
        posts,setPosts,
        page,setPage,
        totalPages,setTotalPages,
        fetchBlogPosts,
        handlePageChange,
    };

    async function fetchBlogPosts(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);

        }
        catch(err){
            console.log("Error in fetching data",err);
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false);
    }

     async function handlePageChange(page){
        // setLoading(true);
        setPage(page);
        fetchBlogPosts(page); 
        // setLoading(false);
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;