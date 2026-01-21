import cartIcon from "../../assets/cart.svg"
import { useNavigate } from "react-router-dom"

function CartSection() {

  const navigate = useNavigate()
  
  return (
    <section className="cart-section">
      <button className="cart-button" onClick={() => navigate("/cart")}>
        <img src={cartIcon} alt="Cart" />
      </button>
    </section>
  )
}

export default CartSection
