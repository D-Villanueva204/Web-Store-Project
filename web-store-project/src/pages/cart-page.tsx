import { useNavigate } from "react-router-dom"
import "../components/web-store/cart-section/cart-section.css"
import { pcProducts } from "../components/web-store/product_data/product_data"

function CartPage() {
  const navigate = useNavigate()
  const cartItems = pcProducts.map(product => ({
    name: product.name,
    price: product.price
  }))
  return (
    <div className="cart-page">
      <header>
        <h1>
          Shopping Cart
        </h1>
      </header>
        <div className="cart-table">
        <table>
          <thead> 
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
         
        onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  )
}

export default CartPage
