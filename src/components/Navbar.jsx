import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import { CartContext } from "../context/cart.context";
import { useContext } from "react";
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from "@mui/material";
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';


const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  
`;

const Greeting = styled.h4`
font-weight:bold;

`;

const Navbar = () => {

  
    const { user, logOutUser } = useContext(AuthContext); 

    const { cart } = useContext(CartContext)

    const [ cartNumber, setCartNumber ] = useState(0)

    const getToken = () => {
        return localStorage.getItem('authToken')
      }

      const isAdmin = () => {
        return localStorage.getItem('isAdmin')
      }
    
    useEffect(() => {

        if (!cart) {
            setCartNumber(0)
        } else if (!cart.message) {
            console.log("Navbar length ===>", cart.cart)
            setCartNumber(cart.products.length)
        } else {
            setCartNumber(0)
        }

    }, [cart])

  return (
    <Container>
        <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
          <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }}/>
          </SearchContainer>
          <MenuItem>
      <Badge badgeContent={cartNumber} color="primary">
        <Link to='cart'>
        <ShoppingBasketRoundedIcon></ShoppingBasketRoundedIcon>
        </Link>
      </Badge>
      </MenuItem> 
        </Left>
        <Center>
          <Logo>Junior in Stock</Logo>
        </Center>
        <Right>

      
      <Link to="/">
        <button>Home</button>
      </Link>
      
      
      {getToken() && (
        <>
            {user && 

            <>
                {!isAdmin() &&          
                    <Link to='cart'>
                        
                    </Link>  
                }
                <Greeting><span>{user && <span>Welcome {user.username}!</span>}</span></Greeting>
                <button onClick={logOutUser}>Logout</button>
             </>
            }      
                
                {isAdmin() && (
                    
                     <Link to="manage-store">Manage Store</Link>
                    
                )}  
        </>
      )}
 
      {!getToken() && (
        
        <>
          <MenuItem><Link to="/register"> <button>Register</button> </Link></MenuItem>
          <MenuItem><Link to="/login"> <button>Login</button> </Link></MenuItem>
        </>
      )}
        {/* <MenuItem>
      <Link to="/all-products">See Products</Link>
        </MenuItem> */}
        

     </Right>
    </Wrapper>
    </Container>
  );
}
 
export default Navbar;