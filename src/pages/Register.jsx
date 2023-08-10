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
        {/* <div className="form sign-in"> */}
      <h3>Register</h3>

      <form onSubmit={handleSignupSubmit}>
        <label>
            <span>Email:</span>
        
        <input 
          type="email"
          name="email"
          value={user.email}
          onChange={handleTextChange}
        />
        </label>

        <label>
            <span>Password:</span>
        <input 
          type="password"
          name="password"
          value={user.password}
          onChange={handleTextChange}
        />
    </label>
        <label>
            <span>Full Name:</span>
        <input 
          type="text"
          name="fullname"
          value={user.fullname}
          onChange={handleTextChange}
        />
        </label>
        <label>
            <span>Username:</span>
        <input 
          type="text"
          name="username"
          value={user.username}
          onChange={handleTextChange}
        />
        </label>
        <button type="submit">Register</button>
      </form>

      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Already have account?</p>
      <Link to="/login"> Login</Link>
    </div>
    // </div>
  )
}

export default Register;