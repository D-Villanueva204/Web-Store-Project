import { useState, useEffect } from "react"
import * as orderRepository from "../apis/orderRepository"
import * as orderService from "../services/orderService"  // ✅ Match team pattern
import type { Order } from "../../../shared/types/order"

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  /**
   * Load all orders from backend
   */
  const loadOrders = async () => {
    try {
      setLoading(true)
      const result = await orderRepository.getAllOrders()
      setOrders(result)
      setError("")
    } catch (errorObject) {
      setError(`${errorObject}`)
    } finally {
      setLoading(false)
    }
  }

  /**
   * Place a new order
   */
  const placeOrder = async (
    items: Array<{
      id: string
      name: string
      price: number
      quantity: number
    }>,
    total: number
  ): Promise<{ success: boolean; message: string }> => {
    try {
      if (items.length === 0) {
        return { success: false, message: "Cart is empty" }
      }

      const calculatedTotal = orderService.calculateTotal(items)
      if (Math.abs(calculatedTotal - total) > 0.01) {
        return { success: false, message: "Total mismatch detected" }
      }

      // Send to backend via repository
      const newOrder = await orderRepository.createOrder({ items, total })
      
      // Update local state
      setOrders([newOrder, ...orders])

      return { success: true, message: "Order placed successfully!" }
      
    } catch (errorObject) {
      setError(`${errorObject}`)
      return { success: false, message: "Failed to place order. Please try again." }
    }
  }

  useEffect(() => {
    loadOrders()
  }, [])

  return {
    orders,
    loading,
    error,
    placeOrder,
    loadOrders
  }
}