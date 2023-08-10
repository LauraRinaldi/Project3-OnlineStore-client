import { Link } from "react-router-dom";

const ProductPreview = ({ product }) => {
    
  return (

<>
        <Link to={`/product-details/${product._id}`}>
          {/* <div> */}
            <img id="preview" src={product.img} alt="product" />
            {/* <p>{product.size}</p> */}
            
          {/* </div> */}
        </Link>
        <p>{product.desc}</p>
        <h4>${product.price}</h4>
        </>

  );
};

export default ProductPreview;