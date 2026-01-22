import { useNavigate } from "react-router-dom"

function CartPage() {
  const navigate = useNavigate()
  return (
    <div className="cart-page">
      <header>
        <h1>
          Shopping Cart
        </h1>
      </header>
      <p>Your cart is currently empty.</p>

      <button
         
        onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  )
}

export default CartPage
