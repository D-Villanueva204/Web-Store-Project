import type { Order } from "../../../../shared/types/order"
import { testOrders } from "../../../data/testOrders"

/**
 * Order Repository
 * Handles data access for order information
 * Uses test data for now
 */

export function getAllOrders(): Order[] {
  return testOrders
}

export function getOrderById(id: number): Order | undefined {
  return testOrders.find(order => order.id === id)
}

export function createOrder(order: Omit<Order, "id">): Order {
  const newOrder: Order = {
    ...order,
    id: testOrders.length + 1
  }
  testOrders.push(newOrder)
  return newOrder
}

