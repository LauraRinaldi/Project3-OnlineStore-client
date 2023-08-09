import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { ProductContext } from '../context/product.context'
import ProductPreview from "../components/Productpreview"
import styled from 'styled-components'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const AllProducts = () => {
    const { products, getProducts } = useContext(ProductContext)

    useEffect(() => {

        if (!products.length) {

            getProducts()
        }


    }, [])

  return (
    <Container>
    <div id="all-products"> 
        <h1>Our products</h1>

        {
            products.map((product) => {
                return (

                    <ProductPreview key={product._id} product={product} />

                )
            })
        }
    </div>
    </Container>
  )
}


export default AllProducts