import type { Order } from "../../../shared/types/order"

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1'


export async function getAllOrders(): Promise<Order[]> {
  const response = await fetch(`${API_BASE_URL}/orders`)
  
  if (!response.ok) {
    throw new Error('Failed to fetch orders')
  }
  
  const result = await response.json()
  return result.data  // Extract data from ApiResponse
}


export async function getOrderById(id: number): Promise<Order | undefined> {
  const response = await fetch(`${API_BASE_URL}/orders/${id}`)
  
  if (!response.ok) {
    if (response.status === 404) return undefined
    throw new Error('Failed to fetch order')
  }
  
  const result = await response.json()
  return result.data
}

export async function createOrder(orderData: {
  items: Array<{
    id: string
    name: string
    price: number
    quantity: number
  }>
  total: number
}): Promise<Order> {
  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
  })
  
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to create order')
  }
  
  const result = await response.json()
  return result.data
}