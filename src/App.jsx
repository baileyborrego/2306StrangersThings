import { Routes, Route, Link } from "react-router-dom";
import AllPosts from "./Components/AllPosts";
import Authenticate from "./Components/Authenticate";
import SignUpForm from "./Components/SignUpForm";
import { useState } from 'react';
import './App.css'

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
    <SignUpForm token={token} setToken={setToken} />
    <Authenticate token={token} setToken={setToken} />
    <div id="header">
      <h1>Stranger's Things</h1>
      <h2>Welcome, [user]!</h2> {/* have this display the username of the person logged in, might need it to be in a different component, we'll see */}
    </div>
    <div>
      <Link to='/'>All Posts</Link>
      {/* <Link to='/posts/POST_ID/messages'>Profile Messages</Link>
      <Link to='/users/login'>Login/Register</Link> */}
    </div>
    <Routes>
        <Route path='/' element={<AllPosts />} />
        {/* <Route path='/' element={<ProfileMessages />} />
        <Route path='/' element={<LoginRegister />} /> */}
    </Routes>   
        {/* <Route path='/:id' element={<SinglePost />} /> */}
      
    </>
  )
}

export default App
