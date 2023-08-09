import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "./auth.context";

import { get } from "../services/auth.service";

const CartContext = createContext()

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(null)

    const { user } = useContext(AuthContext)

    useEffect(() => {

    if (user) {

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
       

    }, [user])


    return (
        <CartContext.Provider value={{ cart, setCart }} >
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }