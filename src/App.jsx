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

    <div id="header">
      <h1>Stranger's Things</h1>
      <h2>Welcome, [user]!</h2> {/* have this display the username of the person logged in, might need it to be in a different component, we'll see */}
    </div>
    <div>
      <Link to='/'>All Posts</Link>
      <Link to='/users/register'>Register</Link>
      <Link to='/users/login'>Sign In</Link>
      {/* <Link to='/posts/POST_ID/messages'>Profile Messages</Link> */}

    </div>
    <Routes>
        <Route path='/' element={<AllPosts />} />
        <Route path='/users/register' element={<SignUpForm token={token} setToken={setToken} />} />
        <Route path='/users/login' element={<Authenticate token={token} setToken={setToken}/>} />
        {/* <Route path='/' element={<ProfileMessages />} /> */}
    </Routes>   

      
    </>
  )
}

export default App
