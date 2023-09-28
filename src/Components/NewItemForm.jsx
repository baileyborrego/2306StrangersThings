import React, {useState} from "react";
import { createPost } from "../API";

export default function CreatePostForm({
  post, setPost }) {
    const [username, setUsername] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
      e.preventDefault();
      const APIData = await createPost(username, description, price, location);
      if (APIData.success) {
        console.log("New Post: ", APIData.data.newPost);

        const newPostsList = [...posts, APIData.data.newPost];
        setPosts(newPostsList);

        setPrice("");
        setLocation("");
        setDescription("");
        setTitle("");
      } else {
        setError(APIData.error.message);
      }
    }

    return (
      <>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        {error && <p>{error}</p>}
        <input
          value={title}
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        /><br/>
        <input
          value={description}
          type="text"
          name="description"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
        /><br/>
        <input
          value={location}
          type="text"
          name="location"
          placeholder="Location"
          onChange={(e) => setLocation(e.target.value)}
        /><br/>
        <input
          value={price}
          type="text"
          name="price"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        /><br/>
        <button>Submit</button>
      </form>
      </>
    );
  }