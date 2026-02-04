import { useNavigate } from "react-router-dom"
import "../components/web-store/cart-section/cart-section.css"


interface CartPageProps {
  cartItems: { name: string; price: string }[]
  removeItem: (index: number) => void
}

function CartPage({ cartItems, removeItem }: CartPageProps) {
  const navigate = useNavigate()

  return (
    <div className="cart-page">
      <header>
        <h1>
          Shopping Cart
          <p>Total Items: {cartItems.length}</p>
        </h1>
      </header>
        <div className="cart-table">
        <table>
          <thead> 
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <button 
                    className="remove-btn" 
                    onClick={() => removeItem(index)}
                  >
                    X
                  </button>
                </td>
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
