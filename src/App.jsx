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
    </>
  )
}

export default App
