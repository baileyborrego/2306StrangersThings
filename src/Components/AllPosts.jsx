import { fetchAllPosts } from "../API";
import { useState, useEffect } from "react";

export default function AllPosts () {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function getAllPosts() {
            const APIResponse = await fetchAllPosts();
            if(APIResponse.success){
                setPosts(APIResponse.data.posts)
            } else {
                setError(APIResponse.error.message)
            }
        }
        getAllPosts();
    },[]);

    return(
        <>
        {posts.map((post)=> {
            return <h3 key={post.id}>{post.title}</h3>
        })}
        </>
    )
}