import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ProductContext } from '../context/product.context'
import { get, put } from "../services/auth.service"

const EditProduct = () => {

    const [product, setProduct] = useState(null)


    const { products, setProducts } = useContext(ProductContext)

    const { productId } = useParams()

    const navigate = useNavigate()


    const handleTextChange = (e) => {
        setProduct((prev) => ({...prev, [e.target.name]: e.target.value}))
      }

    const handleNumberChange = (e) => {
        setProduct((prev) => ({...prev, [e.target.name]: Number(e.target.value)}))
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        put(`/product/${productId}`, product)
            .then((response) => {

                let newProduct = [...products]
                let productIndex = products.findIndex(product => product._id === response.data._id)
                newProduct[productIndex] = response.data
                
                setProduct(newProduct)

                navigate(`/product-details/${response.data._id}`)
            })
            .catch((err) => {
                console.log(err)
            })


    }

    useEffect(() => {

        if(!products.length) {

            get(`/product/find/${productId}`)
                .then((response) => {
                    console.log("Found product", response.data)
                    setProduct(response.data)
                })
                .catch((err) => {
                    console.log(err)
                })

        } else {

            let thisProduct = products.find((product) => product._id === productId)
    
            setProduct(thisProduct)
        }

    }, [])

  return (
    <div>
       <h1>Edit Product</h1>

       {product ? 
       
       <form onSubmit={handleSubmit}>

            <label>Title</label>
            <input type="text" name="title" value={product.title} onChange={handleTextChange} /> 

            <label>Image</label>
            <input type="text" name="image" value={product.img} onChange={handleTextChange} /> 

            <label>Size</label>
            <input type="text" name="size" value={product.size} onChange={handleTextChange} /> 

            <label>Categories</label>
            <input type="text" name="categories" value={product.categories} onChange={handleTextChange} />

            <label>Description</label>
            <input type="text" name="description" value={product.desc} onChange={handleTextChange} /> 

            <label>Price</label>
            <input type="number" name="price" value={product.price} onChange={handleNumberChange} /> 

            <button type="submit">Update Product</button>

       </form>

       : <p>Loading...</p>
       
       }

    </div>
  )
}


export default EditProduct