import { useState, useEffect } from "react"
import type { Order } from "../types/order"
import * as orderRepository from "../components/web-store/repositories/orderRepository"
import * as orderService from "../services/orderService"
import type { Part } from "../components/web-store/repositories/PartTypes"

/**
 * useOrders Hook
 * Returns:
 * - orders: Array of all orders
 * - placeOrder: Function to create a new order from cart items
 * - loadOrders: Function to fetch all orders
 * - getOrderById: Function to get a specific order
 */
export function useOrders() {
    const [orders, setOrders] = useState<Order[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>();
  /**
   * Load all orders from repository
   */
  const loadOrders = async () => {
    try {
      setLoading(true)
      
      // Fetch orders from repository
      const result = orderRepository.getAllOrders()

      // Update state with the fetched orders
      setOrders([...result])
      setError("") // Clear any previous errors
      
    } catch (errorObject) {
      // Set the error state if an error is caught
      setError(`${errorObject}`)
    } finally {
      setLoading(false)
    }
  }


  const getOrderById = (id: number): Order | undefined => {
    return orderRepository.getOrderById(id)
  }

  const placeOrder = (items: Part[], total: number): { success: boolean; message: string } => {
    // Validate order using service
    const validation = orderService.validateOrder(items)
    
    if (!validation.valid) {
      return { success: false, message: validation.message }
    }

    // Create order using service
    const orderData = orderService.createOrderFromCart(items, total)
    
    // Save order using repository
    const newOrder = orderRepository.createOrder(orderData)
    
    // Update local state
    setOrders([...orders, newOrder])

    return { success: true, message: "Order placed successfully!" }
  }

  /**
   * Load orders on mount
   */
  useEffect(() => {
    loadOrders()
  }, [])

  return {
    orders,
    loading,
    error,
    placeOrder,
    getOrderById
  }
}