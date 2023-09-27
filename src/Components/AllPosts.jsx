import { fetchAllPosts } from "../API";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


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
            return <>
            <h2 key={post.id}>{post.title}</h2>
            <p>{post.price}</p>
            <p>{post.description}</p>
            <Link to={`/send-message/${post.author.username}`}>
            Send a message to the author
          </Link>
            {/* not fully sure if this is working properly - might check the route*/}
            {/* {token && ( // Check if the user is logged in (token is not null)
          <Link to={`/send-message/${post.author.username}`}>
            Send a message to the author
          </Link>
        )}   */}
            </>
        })}
        </>
        
        
    )

}