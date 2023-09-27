import { useState } from 'react';
import { login } from '../API';
// import { useNavigate} from "react-router-dom";

export default function Authenticate() {
    const [successMessage, setSuccessMessage] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    // const navigate= useNavigate();
    
    async function handleClick(event){ 
      event.preventDefault();
      const APIData = await login(username, password);
      if (APIData.success){
          setUsername("");
          setPassword("");
          setSuccessMessage(`Welcome ${username}`)
      } else {
            setError(APIData.error.message);
        }
    }
    return (
    <>
        <h2>Login!</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <form>
          <label>
            Username:<input
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            required
            />
          </label> <br></br>
          <label>
            Password:<input
            type='password'
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required/>
          </label>
        </form>
        <button style={{color:'green'}} onClick={handleClick}>Login</button>
     </>
    )
}