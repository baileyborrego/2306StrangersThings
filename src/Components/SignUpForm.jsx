import { useState } from 'react';
import { createUser } from '../API';

function SignUpForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Password and confirm password do not match.');
      return;
    }

    const APIData = await createUser(formData.username, formData.password);

    if (APIData.success) {
      setFormData({ username: '', password: '', confirmPassword: '' });
      setSuccessMessage(`Registration successful! Welcome ${formData.username}!`);
      setError(null); // Clear any previous errors
      // You can redirect the user to the login page here if needed
    } else {
      setError(APIData.error.message);
    }
  };

  return (
    <>
      <h2>Sign Up!</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br></br>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <br></br>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br></br>
        <button style={{ color: 'green' }}>Submit</button>
      </form>
    </>
  );
}

export default SignUpForm;
