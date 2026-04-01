import { useState, useEffect } from "react"
import * as orderRepository from "../apis/orderRepository"
import * as orderService from "../services/orderService"
import type { Order } from "../../../shared/types/order"
import type { Part } from "../../../shared/types/PartTypes"

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")


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

  const placeOrder = async (items: Part[], total: number): Promise<{ success: boolean; message: string }> => {
    try {
      // Client-side validation (immediate feedback)
      const validation = orderService.validateOrderClient(items)
      
      if (!validation.valid) {
        return { success: false, message: validation.message }
      }

      // Prepare items for backend (map Part to expected format)
      const orderItems = items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1  // Adjust if you track quantity elsewhere
      }))

      // Send to backend (backend will validate again for security)
      const newOrder = await orderRepository.createOrder({ 
        items: orderItems, 
        total 
      })
      
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