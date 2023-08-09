import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "./auth.context";

import { get } from "../services/auth.service";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(null)

    const { user } = useContext(AuthContext)

    const getCart = () => {
        get(`/cart/find/${user._id}`)
        .then((response) => {
            if (response.data.message) {
                console.log("CART ======>", response.data)
                setCart({message: response.data.message})
            } else {
                console.log("CART ======>", response.data)
                setCart(response.data)
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {

    if (user) {

        getCart()

    }
       

    }, [user])


    return (
        <CartContext.Provider value={{ cart, setCart, getCart }} >
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }