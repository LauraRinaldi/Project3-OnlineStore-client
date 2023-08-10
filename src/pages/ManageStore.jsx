import { Link } from "react-router-dom"
import styled from 'styled-components'


const Image = styled.img`

`

const ManageStore = () => {
  return (
    <div>
       <h1>Manage Store</h1>
       <br></br>
       <img src="https://www.juniorstock.it/files/magia50_Files/Web/Layout19/Galleries/16/40/01.jpg" alt="store" />
       <br></br>
       <br></br>
        <button><Link to='/add-product'>Add Product</Link></button>
    </div>
  )
}

export default ManageStore