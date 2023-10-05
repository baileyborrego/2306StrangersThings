import { Routes, Route, Link, useParams } from "react-router-dom";
import AllPosts from "./Components/AllPosts";
import Authenticate from "./Components/Authenticate";
import SignUpForm from "./Components/SignUpForm";
import { useState } from 'react';
import './App.css'
import SendMessage from "./Components/SendMessage";
import ProfilePage from "./Components/ProfilePage"; //
// import MessageList from "./Components/MessageList";

function App() {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>

    <div id="header">
      <h1>Stranger's Things</h1>
      {isAuthenticated && <h2>Welcome, {token?.username}!</h2>}
      {/* have this display the username of the person logged in, might need it to be in a different component, we'll see */}
    </div>
    <div id="nav">
      <Link to='/'>All Posts</Link>
      <Link to='/users/register'>Register</Link>
      <Link to='/users/login'>Sign In</Link>
      {/* <Link to='/posts/POST_ID/messages'>Messages</Link> */}
      {isAuthenticated && (
        <>
          <Link to={`/send-message/${token.username}`}>Send Message</Link>
          <button onClick={() => { setToken(null); setIsAuthenticated(false); }}>Logout</button>
        </>
      )}
    </div>
    <Routes>
  <Route path='/' element={<AllPosts />} />
  <Route path='/users/register' element={<SignUpForm token={token} setToken={setToken} />} />
  <Route path='/users/login' element={<Authenticate token={token} setToken={setToken} />} />
  <Route path='/send-message/:authorUsername' element={<SendMessage />} />
  <Route path='/profile' element={<ProfilePage token={token} />} /> {/* Add a route for the ProfilePage component */}
</Routes>

    </>
  )
}

export default App;
