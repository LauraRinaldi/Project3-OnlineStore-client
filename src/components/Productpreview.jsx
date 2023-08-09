import { Link } from "react-router-dom";

const ProductPreview = ({ product }) => {
    
  return (


        <Link to={`/product-details/${product._id}`}>
          <div>
            <img id="preview" src={product.img} alt="product" />
            <p>{product.size}</p>
            <p>{product.price}</p>
          </div>
        </Link>


  );
};

export default ProductPreview;