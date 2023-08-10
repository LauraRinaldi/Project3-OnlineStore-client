import { useContext, useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { ProductContext } from '../context/product.context'
import { AuthContext } from "../context/auth.context"
import { CartContext } from "../context/cart.context"

import { post, put, serverDelete } from "../services/auth.service"

import Select from 'react-select'


const ProductDetails = () => {

    const [product, setProduct] = useState(null)
    const [availableSizes, setAvailableSizes] = useState([])

    const [selectedSize, setSelectedSize] = useState('')
    const [selectedQuantity, setSelectedQuantity] = useState(1)

    const { products, getProducts, setProducts } = useContext(ProductContext)

    const { user } = useContext(AuthContext)

    const { cart, setCart } = useContext(CartContext)

    const { productId } = useParams()

    const navigate = useNavigate()


    const quantityOptions = [{ label: 1, value: 1 }, { label: 2, value: 2 }, { label: 3, value: 3 }, { label: 4, value: 4 }, { label: 5, value: 5 }, { label: 6, value: 6 }, { label: 7, value: 7 }, { label: 8, value: 8 }, { label: 9, value: 9 }, { label: 10, value: 10 },]

    //const sizesOptions = [{label:'0-3 months', value: "0-3 months"}, {label:'6 months', value: '6 months'}, {label:'9 months', value: '9 months'}, {label:'12 months', value: '12 months'}, {label:'18 months', value: '18 months'}, {label:'2 years', value: '2 years'}, {label:'4 years', value: '4 years'}, {label:'6 years', value: '6 years'}, {label:'8 years', value: '8 years'}, {label:'10 years', value: '10 years'}, {label:'12 years', value: '12 years'}, {label:'14 years', value: '14 years'}]

    const handleSizeChange = (e) => {

        console.log("Select change", e)

        setSelectedSize(e.value)

    }

    const handleQuantityChange = (e) => {

        setSelectedQuantity(e.value)
    }



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

        if (cart.message) {

            const body = {
                productId,
                size: selectedSize,
                quantity: selectedQuantity
            }

            console.log("Body", body)

            console.log("User", user)

            post('/cart', body)
                .then((response) => {
                    console.log("New cart", response.data)
                    // setCart(response.data)
                    navigate('/cart')
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            const body = {
                productId,
                size: selectedSize,
                cartId: cart._id,
                quantity: selectedQuantity
            }

            console.log("CART EXISTS", cart)
            console.log("Message", cart.message)

            post(`/cart/${user._id}/${cart._id}`, body)
                .then((response) => {
                    console.log("Updated cart", response.data)
                    // setCart(response.data)
                    navigate('/cart')
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        // productId, subtotal, total, cartId
    }

    useEffect(() => {

        if (!products.length) {
            getProducts()
        }

        let thisProduct = products.find((product) => product._id === productId)
        let sizes = thisProduct?.size.map((size) => {
            return { label: size, value: size }
        })
        console.log("Sizes ====>", sizes)
        setAvailableSizes(sizes)
        setProduct(thisProduct)

    }, [productId, products])


    return (
        <div>
            <h1>Product Details</h1>
            {/* <h4>{product.title}</h4> */}

            {
                product ?

                    <div>






                        <img id="product-detail" src={product.img} alt="product" />


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
                                        
                                        
                                        <Select
                                            placeholder="Select size"
                                            // defaultValue={product.size}
                                            // isMulti
                                            name="sizes"
                                            options={availableSizes}
                                            // options={sizesOptions}
                                            className="basic-multi-select size-select"
                                            classNamePrefix="select"
                                            onChange={handleSizeChange}

                                        />
                                        
                                        <Select
                                            placeholder="Select quantity"
                                            // defaultValue={product.size}
                                            // isMulti
                                            name="sizes"
                                            options={quantityOptions}
                                            // options={sizesOptions}
                                            className="basic-multi-select size-select"
                                            classNamePrefix="select"
                                            onChange={handleQuantityChange}

                                        />
                                        <button onClick={addToCart} >Add to Cart</button>

                                    </>
                                }

                            </>
                        }

                        <p class="description">{product.desc}</p>
                        {/* <p>{product.categories}</p> */}
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