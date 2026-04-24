import { useEffect, useState } from "react"
import { useAuth } from "@clerk/clerk-react"
import * as orderRepository from "../apis/orderRepository"
import * as orderService from "../services/orderService"
import type { Order } from "../../../shared/types/order"

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")
  const { userId, getToken, isSignedIn } = useAuth()  

  async function loadOrders() {
    if (!isSignedIn || !userId) {  
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      const sessionToken = await getToken()  
      const result = await orderRepository.getAllOrders(sessionToken)  
      setOrders(result)
      setError("")
    } catch (errorObject) {
      setError(`${errorObject}`)
    } finally {
      setLoading(false)
    }
  }

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

      if (!isSignedIn || !userId) {  
        return { success: false, message: "Please sign in to place an order" }
      }

      const sessionToken = await getToken()  

      const newOrder = await orderRepository.createOrder(
        { items, total },
        sessionToken 
      )

      setOrders([newOrder, ...orders])
      return { success: true, message: "Order placed successfully!" }

    } catch (errorObject) {
      setError(`${errorObject}`)
      return { success: false, message: "Failed to place order. Please try again." }
    }
  }

  useEffect(() => {
    loadOrders()
  }, [isSignedIn, userId])  

  return {
    orders,
    loading,
    error,
    placeOrder,
    loadOrders
  }
}