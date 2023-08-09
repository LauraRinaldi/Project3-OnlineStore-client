
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { get } from '../services/auth.service'

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const navigate = useNavigate()

  const storeToken = (token) => {       //  <==  ADD
    localStorage.setItem('authToken', token);
  }

  const removeToken = () => {                    
    localStorage.removeItem("authToken");
    localStorage.removeItem("isAdmin");
  }

  const authenticateUser = () => {
    const storedToken = localStorage.getItem('authToken');

    if (storedToken) {

    get('/auth/verify')
      .then((response) => {
        console.log("user", response.data)
        const user = response.data;
        if (response.data.isAdmin) {
            localStorage.setItem("isAdmin", true)
        }
      
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(user);        
      })
      .catch((error) => {

        removeToken();       
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);        
      });      
    } else {

        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);      
    }   
  }
  
  const logOutUser = () => {      
    removeToken();
  
    authenticateUser();
    navigate('/')
  }  
 
  
  useEffect(() => {   
    authenticateUser()              

  }, []);
  

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext };