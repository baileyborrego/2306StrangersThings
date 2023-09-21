import { Routes, Route, Link } from "react-router-dom";
import AllPosts from "./Components/AllPosts";
import './App.css'

function App() {
  

  return (
    <>
    <div>
      <Link to='/'>All Posts</Link>
      {/* <Link to='/:id'>Single Post</Link> */}
    </div>
    <Routes>
        <Route path='/' element={<AllPosts />} />
        <Route path='/:id' element={<SinglePost />} />
    </Routes> 
      
    </>
  )
}

export default App
