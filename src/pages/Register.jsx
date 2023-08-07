// src/pages/SignupPage.jsx

import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { post } from '../services/auth.service'




function Register() {

  const [user, setUser] = useState({
    email: "",
    password: "",
    fullname: "",
    username: ""
  })

  const [errorMessage, setErrorMessage] = useState(undefined);

  const { storeToken, authenticateUser } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    post('/auth/register', user)
      .then((response) => {
        console.log('JWT token', response.data.authToken );
        storeToken(response.data.authToken)
        authenticateUser()
        navigate('/');     
      })
      .catch((error) => {
        console.log("Error", error)
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })
  };

  
  return (
    <div className="Register">
      <h1>Register</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={user.email}
          onChange={handleTextChange}
        />

        <label>Password:</label>
        <input 
          type="password"
          name="password"
          value={user.password}
          onChange={handleTextChange}
        />

        <label>Full Name:</label>
        <input 
          type="text"
          name="fullname"
          value={user.fullname}
          onChange={handleTextChange}
        />

        <label>Username:</label>
        <input 
          type="text"
          name="username"
          value={user.username}
          onChange={handleTextChange}
        />

        <button type="submit">Register</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Already have account?</p>
      <Link to="/login"> Login</Link>
    </div>
  )
}

export default Register;