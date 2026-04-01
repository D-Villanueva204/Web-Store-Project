import type { Part } from "./PartTypes"

export interface Order {
  id: number
  items: OrderItem[]
  total: number
  date: string
  
}

export interface OrderItem {
  id: string
  orderId: number
  partId: string
  quantity: number
  part: Part
}