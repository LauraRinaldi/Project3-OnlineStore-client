import { Link } from "react-router-dom";
import React, { useState } from "react";
import { AuthContext } from "../context/auth.context";
import { useContext } from "react";
// import styled from 'styled-components'

 
const Navbar = () => {

  
    const { user, logOutUser } = useContext(AuthContext);

    const getToken = () => {
        return localStorage.getItem('authToken')
      }

      const isAdmin = () => {
        return localStorage.getItem('isAdmin')
      }

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

 
      {getToken() && (
        <>
            {user && 
            <>
                <Link to='cart'>
                    <button>See Cart</button>
                </Link>  
                <span>{user && <span>Welcome {user.username}!</span>}</span>
                <button onClick={logOutUser}>Logout</button>
             </>
            }      
                
                {isAdmin() && (
    <><Link to="manage-store">Manage Store</Link></>
)}  
        </>
      )}
 
      {!getToken() && (
        <>
          <Link to="/register"> <button>Register</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}
 
export default Navbar;