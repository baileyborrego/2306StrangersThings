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
<<<<<<< HEAD
        {/* <Route path='/' element={<ProfileMessages />} />
        <Route path='/' element={<LoginRegister />} /> */}
=======
        <Route path='/:id' element={<SinglePost />} />
>>>>>>> 9f7a8b969cae0a987370d5b9987672cf5fd3e5d2
    </Routes> 
      
    </>
  )
}

export default App
