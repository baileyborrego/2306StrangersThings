import { useState } from 'react';
import { fetchToken } from '../API';
// import { useNavigate} from "react-router-dom";

export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    // const navigate= useNavigate();
    
    async function handleClick(event){ 
      event.preventDefault();
      const APIData = await fetchToken();
      if (APIData.success){
        const username = APIData.data.username;
          // console.log(username)
          setSuccessMessage(`Welcome ${username}`)
      } else {
            setError(APIData.error);
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
            // value={username}
            required
            />
          </label> <br></br>
          <label>
            Password:<input
            type='password'
            required/>
          </label>
        </form>
        <button style={{color:'green'}} onClick={handleClick}>Login</button>
     </>
    )
}