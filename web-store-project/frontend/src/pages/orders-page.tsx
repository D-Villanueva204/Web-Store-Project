import { useOrders } from "../hooks/useOrders"
import * as orderService from "../services/orderService"
import "./orders-page.css"
/**
 * OrdersPage Component
 * 
 * Architecture Pattern Usage:
 * - Hook: useOrders() - fetches and manages order history
 * - Service: orderService.formatOrderDate() - formats dates for display
 * - Repository: orderRepository.getAllOrders() - retrieves order data
 * 
 * Displays all orders placed by the user in a table format.
 */

function OrdersPage() {
  const { orders, loading } = useOrders()

  if (loading) {
    return <div className="loading">Loading orders...</div>
  }

  return (
    <div className="orders-page">
      <header>
        <h1>Orders Placed</h1>
        <p>Total Orders: {orders.length}</p>
      </header>

      <div className="orders-table">
        <table>
          <thead>
            <tr>
              <th>Order #</th>
              <th>Date</th>
              <th>Items</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan={4} className="empty-message">
                  No orders yet. Start shopping!
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>#{order.id}</td>
                  <td>{orderService.formatOrderDate(order.date)}</td>
                  <td>
                    <ul className="order-items">
                      {order.items.map((item, idx) => (
                        <li key={idx}>
                          {item.part.name} - ${Number(item.part.price).toFixed(2)} (x{item.quantity})
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>${order.total.toFixed(2)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrdersPage