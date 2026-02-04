import cartIcon from "./cart.svg"
import { NavLink } from "react-router-dom"
import "./cart-section.css"

function CartSection() {
  return (
    <section className="cart-section">
      <NavLink to="/cart" className="cart-button">
        <img src={cartIcon} alt="Cart" />
      </NavLink>
    </section>
  )
}

export default CartSection
