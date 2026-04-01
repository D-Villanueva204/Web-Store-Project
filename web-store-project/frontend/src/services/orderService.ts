import type { Order } from "../../../shared/types/order"
import type { Part } from "../../../shared/types/PartTypes"


export function formatOrderDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

export function formatPrice(price: number): string {
  return `$${price.toFixed(2)}`
}


export function calculateTotal(items: Part[]): number {
  return items.reduce((sum, item) => {
    const price = Number(item.price)
    const quantity = 1 // Adjust if Part has quantity field
    return sum + (price * quantity)
  }, 0)
}


export function validateOrderClient(items: Part[]): { valid: boolean; message: string } {
  if (!items || items.length === 0) {
    return { valid: false, message: "Cart is empty" }
  }

  // Check for invalid stock
  const invalidItem = items.find(item => !item.stock || item.stock <= 0)
  if (invalidItem) {
    return { 
      valid: false, 
      message: `${invalidItem.name} has invalid stock` 
    }
  }

  return { valid: true, message: "Order is valid" }
}

export function formatOrderSummary(order: Order): string {
  const itemCount = order.items?.length || 0
  const itemText = itemCount === 1 ? 'item' : 'items'
  return `${itemCount} ${itemText} - ${formatPrice(order.total)}`
}