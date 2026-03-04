import { useState } from "react"
import "../components/web-store/cart-section/cart-section.css"
import { useOrders } from "../hooks/useOrders"
import type { CartItem } from "../components/web-store/sidebar/CartItem"

/**
 * CartPage Component
 * 
 * - Hook: useOrders() - manages order placement and history
 * - Service: orderService.validateOrder() - validates cart before checkout
 * - Repository: orderRepository.createOrder() - persists order data
 * 
 */

interface CartPageProps {
  items: CartItem[]
  total: number
  removeItemFromCart: () => void
  clearCart: () => void
}

function CartPage({ items, total, removeItemFromCart, clearCart }: CartPageProps) {
  const { placeOrder } = useOrders()
  const [message, setMessage] = useState<string>("")
  
  const handlePlaceOrder = () => {
    const result = placeOrder(items, total)
    
    setMessage(result.message)
    
    if (result.success) {
      // Clear cart after successful order
      clearCart()
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(""), 3000)
    }
  }
  
  return (
    <div className="cart-page">
      <header>
        <h1>Shopping Cart</h1>
        <p>Total Items: {items.length}</p>
      </header>
      
      {message && (
        <div className={`message ${message.includes("success") ? "success" : "error"}`}>
          {message}
        </div>
      )}
      
      <div className="cart-table">
        <table>
          <thead> 
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={4} className="empty-message">
                  Your cart is empty. Start shopping!
                </td>
              </tr>
            ) : (
              items.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>${Number(item.price).toFixed(2)}</td>
                  <td>
                    <button 
                      className="remove-btn" 
                      onClick={() => removeItemFromCart(index)}
                      aria-label={`Remove ${item.name}`}
                    >
                      ✕
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr className="total-row">
              <td colSpan={3}><strong>Total:</strong></td>
              <td><strong>${total.toFixed(2)}</strong></td>
            </tr>
          </tfoot>
        </table>
        <div className="cart-actions">
          <button 
            onClick={handlePlaceOrder}
            className="place-order-btn"
            disabled={items.length === 0}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage