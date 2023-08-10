import { Link } from "react-router-dom";
import '../App.css'

const ProductPreview = ({ product }) => {
    
  return (
<div class="row">

        <Link to={`/product-details/${product._id}`}>
          
          {/* <div class="column"> */}
            <img id="preview" src={product.img} alt="product" />
            {/* <p>{product.size}</p> */}
            
            
        </Link>
       <div class="column">
        <p class="description">{product.desc}</p>
        <h4>${product.price}</h4>
        
        </div>
        
        </div>

  );
};

export default ProductPreview;