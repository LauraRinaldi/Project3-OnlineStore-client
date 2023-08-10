import { useContext, useEffect } from "react"
import { CartContext } from "../context/cart.context"
import { AuthContext } from "../context/auth.context"
import { post } from "../services/auth.service"
import ProductPreview from "../components/Productpreview"

const Cart = () => {

  const { cart, setCart, getCart } = useContext(CartContext)

  const { user } = useContext(AuthContext)

  const removeItem = (id) => {
    
    console.log("Removing", id)

    post(`/cart/remove-product/${id}`, cart)
      .then((response) => {
        console.log("Removed", response.data)
        setCart(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  
  }
  const proceedToCheckout = () => {
    post(`/stripe/create-checkout-session`, { cart })
      .then((response) => {
        console.log("product", response.data);
        window.location.href = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPercentage = (num) => {

    return `${(num * 100) % 100}%`
    
  }

  useEffect(() => {

    if (user) {

        getCart()
    }


  }, [user])


  return (
    <div>

      <h1>Your Cart</h1>
    
      { cart ?
      
      
      <>
        {
          cart.message ? 
          
              <h3>{cart.message}</h3>

            : 

            <div>

                {cart.products && 
                
                    <>
                    
                            {cart.products.length ? 
                            
                            <>
                            
                                {cart.products.map((product) => {
                                return (
                                    <div key={product._id}>
                                    <ProductPreview product={product.product} />
                                    <button onClick={()=>removeItem(product._id)} >Remove</button>
                                    </div>
                                )
                                })}
                            
                            </>
            
                            : <p>Loading...</p>
                                
                        } 
                    
                    <h5>Subtotal: ${cart.subtotal}</h5>
                    <h5>Tax: {getPercentage(cart.tax)}</h5>
                    <h4>Total: ${cart.total.toFixed(2)}</h4>
                    </>
                
                }

<button onClick={proceedToCheckout}>checkout</button>

            </div>
          
        }

      </>

      : <p>Loading...</p>
      }
    
    </div>

  )
}

export default Cart