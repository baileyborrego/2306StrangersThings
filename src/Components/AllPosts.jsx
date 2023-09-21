import { fetchAllPosts } from "../API";
import { useState, useEffect } from "react";

export default function AllPosts () {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getAllPosts() {
            const APIResponse = await fetchAllPosts();
            if(APIResponse.success){
                setPosts(APIResponse.data)
            } else {
                setError(APIResponse.error.message)
            }
        }
    },[]);

    return(
        <>
        
        </>
    )
}