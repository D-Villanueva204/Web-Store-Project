import "../components/web-store/cart-section/cart-section.css"
import type { Part } from "../components/web-store/parts/general/PartTypes"

interface CartPageProps {
  items: Part[]
  total: number
  removeItemFromCart: (index: number) => void
  clearCart: () => void
}

function CartPage({ items, total, removeItemFromCart, clearCart }: CartPageProps) {
  
  return (
    <div className="cart-page">
      <header>
        <h1>Shopping Cart</h1>
        <p>Total Items: {items.length}</p>
      </header>
      
      <div className="cart-actions">
        <button 
          onClick={clearCart}
          className="clear-cart-btn"
          disabled={items.length === 0}
        >
          Clear All Items
        </button>
      </div>
      
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
                <td className="empty-message">
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
                      X
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
      </div>
    </div>
  )
}

export default CartPage