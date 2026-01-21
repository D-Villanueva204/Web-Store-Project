import { useNavigate } from "react-router-dom"

function CartPage() {
  const navigate = useNavigate()
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Shopping Cart</h1>
      <p>Your cart is currently empty.</p>

      <button onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  )
}

export default CartPage
