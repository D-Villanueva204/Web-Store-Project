import type { Part } from "../components/web-store/parts/general/PartTypes"
import type { Order } from "../types/order"

/**
 * Order Service
 * Handles business logic for order processing
 */

export function createOrderFromCart(items: Part[], total: number): Omit<Order, "id"> {
  return {
    items: [...items], // Clone items
    total: total,
    date: new Date().toISOString()
  }
}


export function calculateTotal(items: Part[]): number {
  return items.reduce((sum, item) => sum + Number(item.price), 0)
}

/**
 * Validate order before placement (Empty Cart and Out of Stock)
 */
export function validateOrder(items: Part[]): { valid: boolean; message: string } {
  if (items.length === 0) {
    return { valid: false, message: "Cart is empty" }
  }

  /**
   * commented this out for now since it couldn't seem to receive the stock (stock = 0)
   * Debugged by using "console.log("Cart items:", items)" on cart-page.tsx
   * Note: Check buyButton.tsx
   */
//   const outOfStock = items.find(item => item.stock === 0)
//   if (outOfStock) {
//     return { valid: false, message: `${outOfStock.name} is out of stock` }
//   }

  return { valid: true, message: "Order is valid" }
}

/**
 * Format date for display (example: instead of 2026-03-03, it's March 3, 2026)
 */
export function formatOrderDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}