import { useState } from 'react';
import { fetchToken } from '../API';

export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    
    async function handleClick(event){ 
      event.preventDefault();
      const APIData = await fetchToken();
      if (APIData.success){
        const username = APIData.data.username;
          console.log(username)
          setSuccessMessage(`${APIData.message} Welcome ${username}`)
      } else {
            setError(APIData.error);
        }
    }
    return (
    <>
        <h2>Authenticate!</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <button onClick={handleClick}>Authenticate Token</button>
     </>
    )
}