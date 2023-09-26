import { Routes, Route, Link } from "react-router-dom";
import AllPosts from "./Components/AllPosts";
import './App.css'

function App() {
  

  return (
    <>
    <div id="header">
      <h1>Stranger's Things</h1>
      <h2>Welcome, [user]!</h2> {/* have this display the username of the person logged in, might need it to be in a different component, we'll see */}
    </div>
    <div>
      <Link to='/'>All Posts</Link>
      {/* <Link to='/:id'>Single Post</Link> */}
    </div>
    <Routes>
        <Route path='/' element={<AllPosts />} />
        {/* <Route path='/:id' element={<SinglePost />} /> */}
    </Routes> 
      
    </>
  )
}

export default App
