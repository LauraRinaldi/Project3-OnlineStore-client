import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

import { get } from "../services/auth.service";

const ProductContext = createContext()

const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    const getProducts = () => {

        get('/product')
            .then((response) => {
                console.log("Products", response.data)
                setProducts(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <ProductContext.Provider value={{ products, getProducts, setProducts}}>
            {children}
        </ProductContext.Provider>
    )
}

export { ProductContext, ProductProvider }