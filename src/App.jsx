import { Routes, Route, Link } from "react-router-dom";
import AllPosts from "./Components/AllPosts";
import './App.css'

function App() {

  return (
    <>
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
