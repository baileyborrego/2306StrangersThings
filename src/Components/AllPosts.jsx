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

    const postToDisplay = searchParam
        ? posts.filter((posts) => 
        posts.title.toLowerCase().includes(searchParam))
        : posts; 
    return (
        <>
        <div>
         <label>
           Search:{" "}
          <input type="text" 
             placeholder="search"
           onChange={(e) => setSearchParam(e.target.value.toLowerCase())}/>
         </label>
        </div>
        {postToDisplay.map((post)=> {
            return <h3 key={post.id}>{post.title}</h3>
        })}
        </>
        
        
    )

}