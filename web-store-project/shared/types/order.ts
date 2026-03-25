import type { Part } from "./PartTypes"

export interface Order {
  id: number
  items: Part[]
  total: number
  date: string
  
}