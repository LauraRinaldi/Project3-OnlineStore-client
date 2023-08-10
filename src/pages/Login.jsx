// src/pages/LoginPage.jsx

import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
// import "bootstrap/dist/css/bootstrap.min.css"
import { Link, useNavigate } from "react-router-dom";
import '../App.css'
import { post } from '../services/auth.service'

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { storeToken, authenticateUser } = useContext(AuthContext)

  
  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };
 
    post('/auth/login', requestBody)
      .then((response) => {

        console.log('JWT token', response.data.authToken );
        storeToken(response.data.authToken)
        authenticateUser()
        navigate('/');                                 
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      })


  };
  
  return (
    <div className="cont">
        <div className="form sign-in"></div>
      <h3>Welcome back,</h3>

      <form onSubmit={handleLoginSubmit}>
        <label>
            <span>Email:</span>
            
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
        </label>

        <label>
            <span>Password:</span>
            
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        </label>

        <button type="submit">Login</button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }

      <p>Don't have an account yet?</p>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default LoginPage;