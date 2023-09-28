import { fetchAllPosts } from "../API";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CreatePostForm from "./NewItemForm";


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
        <CreatePostForm posts={posts} setPosts={setPosts} />
        {postToDisplay.map((post)=> {
            return <><div id="post">
            <h2 key={post.id}>{post.title}</h2>
            <p className="description">{post.description}</p>
            <p>Price: {post.price}</p>
            <h3>Seller: {post.author.username}</h3>
            <p>Location: {post.location}</p> {/* add if the seller is willing to deliver */}
            <Link to={`/send-message/${post.author.username}`}> 
            Send Message
          </Link> 
          </div>
            {/* <Link to={`/send-message/${post.author.username}`}>
            Send a message to the author
          </Link> */}
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