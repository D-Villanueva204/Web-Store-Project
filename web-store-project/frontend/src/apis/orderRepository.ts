import type { Order } from "../../../shared/types/order"

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`
const ORDER_ENDPOINT = '/orders'

/**
 * Get all orders from backend
 */
export async function getAllOrders(sessionToken?: string | null): Promise<Order[]> {
  const response = await fetch(`${BASE_URL}${ORDER_ENDPOINT}`, {
    headers: {
      Authorization: `Bearer ${sessionToken}` 
    }
  })

  if (!response.ok) {
    throw new Error('Failed to fetch orders')
  }

  const json = await response.json()
  return json.data  
}

/**
 * Get order by ID from backend
 */
export async function getOrderById(id: number, sessionToken?: string | null): Promise<Order | undefined> {
  const response = await fetch(`${BASE_URL}${ORDER_ENDPOINT}/${id}`, {
    headers: {
      Authorization: `Bearer ${sessionToken}`  
    }
  })

  if (!response.ok) {
    if (response.status === 404) return undefined
    throw new Error('Failed to fetch order')
  }

  const json = await response.json()
  return json.data
}

/**
 * Create new order in backend
 */
export async function createOrder(
  orderData: {
    items: Array<{
      id: string
      name: string
      price: number
      quantity: number
    }>
    total: number
  },
  sessionToken?: string | null  
): Promise<Order> {
  const response = await fetch(`${BASE_URL}${ORDER_ENDPOINT}`, {
    method: 'POST',
    body: JSON.stringify(orderData),  
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${sessionToken}`  
    }
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.message || 'Failed to create order')
  }

  const json = await response.json()
  return json.data
}