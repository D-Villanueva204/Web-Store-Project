import { Order } from "@prisma/client"
import { prisma } from "../../../../lib/prisma"  


export const fetchAllOrders = async (): Promise<Order[]> => {
  return prisma.order.findMany({
    include: {
      items: {
        include: {
          part: true
        }
      }
    },
    orderBy: {
      date: 'desc'
    }
  })
}


export const fetchOrderById = async (id: number): Promise<Order | null> => {
  return prisma.order.findUnique({
    where: { id },
    include: {
      items: {
        include: {
          part: true
        }
      }
    }
  })
}


export const createOrder = async (orderData: {
  items: Array<{
    id: string
    name: string
    price: number
    quantity: number
  }>
  total: number
}): Promise<Order> => {
  const newOrder: Order = await prisma.order.create({
    data: {
      total: orderData.total,
      items: {
        create: orderData.items.map(item => ({
          quantity: item.quantity,
          partId: item.id
        }))
      }
    },
    include: {
      items: {
        include: {
          part: true
        }
      }
    }
  })

  return newOrder
}