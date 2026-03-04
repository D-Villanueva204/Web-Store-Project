import type { Part } from "../components/web-store/parts/general/PartTypes"

export interface Order {
  id: number
  items: Part[]
  total: number
  date: string
  
}