import { useContext, useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { ProductContext } from '../context/product.context'
import { AuthContext } from "../context/auth.context"
import { CartContext } from "../context/cart.context"

import { post, put, serverDelete } from "../services/auth.service"


const ProductDetails = () => {

    const [product, setProduct] = useState(null)

    const { products, getProducts, setProducts } = useContext(ProductContext)

    const { user } = useContext(AuthContext)

    const { cart, setCart } = useContext(CartContext)

    const { productId } = useParams()

    const navigate = useNavigate()

    const isAdmin = () => {
        return localStorage.getItem('isAdmin')
      }

    const deleteProduct = () => {

       serverDelete(`/product/${productId}`)
            .then((response) => {
                let newProducts = products.filter(product => product._id !== response.data._id)
                setProducts(newProducts)
                navigate('/all-products')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const addToCart = () => {
                
        if(cart.message) {
            
            const body = {
                productId,
                productPrice: product.price,
                // subtotal: product.price,
                // total: product.price * 1.08
            }

            console.log("Body", body)

            console.log("User", user)

            post('/cart', body)
                .then((response) => {
                    console.log("New cart", response.data)
                    setCart(response.data)
                    navigate('/cart')
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            const body = {
                productId,
                productPrice: product.price,
                // subtotal: product.price
                // subtotal: cart.subtotal + product.price,
                // total: (cart.subtotal + product.price) * 1.08,
                cartId: cart._id
            }

            console.log("CART EXISTS", cart)
            console.log("Message", cart.message)

            put(`/cart/${user._id}/${cart._id}`, body)
            .then((response) => {
                console.log("Updated cart", response.data)
                setCart(response.data)
                navigate('/cart')
            })
            .catch((err) => {
                console.log(err)
            })
        }
        // productId, subtotal, total, cartId
    }

    useEffect(() => {

        if(!products.length) {
            getProducts()
        }

        let thisProduct = products.find((product) => product._id === productId)

        setProduct(thisProduct)

    }, [productId, products])


  return (
    <div>
        <h1>Product Details</h1>
        {/* <h4>{product.title}</h4> */}

        {
            product ?

            <div>

                {
                    user &&

                    <>
                    
                    
                        {isAdmin() &&  
                            <>
                                <Link to={`/edit-product/${product._id}`}><button>Edit Product</button></Link>
                                <button onClick={deleteProduct}>Remove Listing</button>
                            </>
                        }
                        {!isAdmin() &&  
                            <>
                                <button onClick={addToCart} >Add to Cart</button>
                            </>
                        }
                    
                    </>
                }

        
    

                <img id="product-detail" src={product.img} alt="product" />
                <p>{product.size}</p>
                <p>{product.desc}</p>
                <p>{product.categories}</p>
                <h5>${product.price}</h5>
                    <>
{/* 
                            {

                                sock.comments.length ? (

                                    <>
                                        {
                                            sock.comments.map((comment) => {
                                                return (
                                                    <>
                                                        <p>{comment.comment}</p>
                                                        <h6>-{comment.author.username}</h6>
                                                    </>
                                                )
                                            })
                                        }
                                    </>                                    

                                ) : null

  

                            } */}
                    </>
            </div>

            : <p>Loading...</p>

                        }
    

    </div>

  )
}

export default ProductDetails