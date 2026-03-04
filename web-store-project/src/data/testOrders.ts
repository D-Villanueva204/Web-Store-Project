import type { Order } from "../types/order"

export const testOrders: Order[] = [
  {
    id: 1,
    items: [
      { name: "AMD Ryzen 7 7800X3D", price: 449.99, stock: 10 },
      { name: "RTX 3060 Ti", price: 399.99, stock: 5 }
    ],
    total: 849.98,
    date: "2024-01-15",
  },
  {
    id: 2,
    items: [
      { name: "Corsair Vengeance DDR5", price: 129.99, stock: 20 }
    ],
    total: 129.99,
    date: "2024-01-20",
  },

  {
    id: 3,
    items: [
        {name: "Lian Li O11D EVO RGB", price: 159.99, stock: 44}
    ],
    total: 159.99,
    date: "2024-01-25"
  },
  {
    id: 4,
    items: [
      { name: "MSI MAG B650 TOMAHAWK", price: 229.99, stock: 12 }
    ],
    total: 229.99,
    date: "2024-02-10"
  },
  {
    id: 5,
    items: [
      { name: "Corsair RM850x", price: 149.99, stock: 10 },
      { name: "G.SKILL Trident Z5 RGB", price: 159.99, stock: 25 }
    ],
    total: 309.98,
    date: "2024-02-15"
  },
  {
    id: 6,
    items: [
      { name: "Intel Core i9-13900K", price: 589.99, stock: 6 }
    ],
    total: 589.99,
    date: "2024-02-20"
  },
  {
    id: 7,
    items: [
      { name: "ASUS ROG Strix X670E", price: 449.99, stock: 4 },
      { name: "Corsair H150i Elite", price: 189.99, stock: 10 }
    ],
    total: 639.98,
    date: "2024-02-25"
  },
  {
    id: 8,
    items: [
      { name: "Fractal Design Meshify C", price: 109.99, stock: 15 }
    ],
    total: 109.99,
    date: "2024-03-01"
  },
  {
    id: 9,
    items: [
      { name: "Western Digital SN850X", price: 199.99, stock: 20 },
      { name: "Seasonic Focus GX-750", price: 119.99, stock: 18 }
    ],
    total: 319.98,
    date: "2024-03-05"
  },
  {
    id: 10,
    items: [
      { name: "AMD Radeon RX 7900 XTX", price: 999.99, stock: 3 },
      { name: "G.SKILL Ripjaws V", price: 89.99, stock: 30 }
    ],
    total: 1089.98,
    date: "2024-03-10"
  }
]