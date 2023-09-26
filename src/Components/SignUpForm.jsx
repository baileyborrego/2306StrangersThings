import { useState } from 'react';
import { createUser } from '../API';

export default function SignUpForm({setToken}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
        const APIData = await createUser(username, password);
        if (APIData.success) {
            setToken(APIData.token)

        } else {
            setError(APIData.error  )
        }

        
    }
    return (
        <>
        <h2>Sign Up!</h2> 
        {error && <p>{error}</p>}
        
        <form onSubmit={handleSubmit}>
            <label>
                Username:<input 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
            </label><br></br>
            <label>
                Password:<input
                type='password'
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label><br></br>
            <button>Submit</button>
        </form>
        </>
    ) 



}