import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react"
import { useState } from "react"
import "../components/web-store/cart-section/cart-section.css"
import { useOrders } from "../hooks/useOrders"
import type { CartItem } from "../../../shared/types/CartItem"

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
  removeItemFromCart: (cartItem: CartItem) => void
  clearCart: () => void
}

function CartPage({ items, total, removeItemFromCart, clearCart }: CartPageProps) {
  const { placeOrder } = useOrders()
  const [message, setMessage] = useState<string>("")
  const [isPlacingOrder, setIsPlacingOrder] = useState<boolean>(false)
  
  const handlePlaceOrder = async () => {  
    setIsPlacingOrder(true)
    setMessage("")
    
    try {
      const orderItems = items.map(cartItem => ({
        id: cartItem.partId,           
        name: cartItem.name,
        price: cartItem.price,
        quantity: cartItem.quantity 
      }))
      
      const result = await placeOrder(orderItems, total)  
      
      setMessage(result.message)
      
      if (result.success) {
        clearCart()
        setTimeout(() => setMessage(""), 3000)
      }
    } catch (err) {
      console.error("Order placement error:", err)
      setMessage("An error occurred while placing the order")
    } finally {
      setIsPlacingOrder(false)
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
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={5} className="empty-message">
                  Your cart is empty. Start shopping!
                </td>
              </tr>
            ) : (
              items.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>${Number(item.price).toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button 
                      className="remove-btn" 
                      onClick={() => removeItemFromCart(item)}
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
              <td colSpan={4}><strong>Total:</strong></td>
              <td><strong>${total.toFixed(2)}</strong></td>
            </tr>
          </tfoot>
        </table>

        <div className="cart-actions">

          <SignedOut>
            <div className="auth-message">
              <p>Please sign in to place an order</p>
              <SignInButton />
            </div>
          </SignedOut>

          <SignedIn>
            <button 
              onClick={handlePlaceOrder}
              className="place-order-btn"
              disabled={items.length === 0 || isPlacingOrder}
            >
              {isPlacingOrder ? "Placing Order..." : "Place Order"}
            </button>
          </SignedIn>

        </div>
      </div>
    </div>
  )
}

export default CartPage