import { fetchAllPosts } from "../API";
import { useState, useEffect } from "react";

// Create a search form in here 

export default function AllPosts () {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState("")

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

    const postSearchBar = searchParam
    ? post.filter((post) => 
    post.title.toLowerCase().includes(searchParam)
    )
    : posts;    
        return (
            <div>
                <div>
                    <label>
                        Search:{" "}
                        <input type="text" 
                        placeholder="search"
                        onChange={(e) => setSearchParam(e.target.value.toLowerCase())}/>
                    </label>
                </div>
            </div>
        )
}