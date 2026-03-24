import type { Part } from "../components/web-store/repositories/PartTypes"

export interface Order {
  id: number
  items: Part[]
  total: number
  date: string
  
}