import { Link } from "react-router-dom"

const ManageStore = () => {
  return (
    <div>
        <h1>Manage Store</h1>
        <Link to='/add-product'>Add Product</Link>
    </div>
  )
}

export default ManageStore