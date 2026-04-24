import { Order } from "@prisma/client"
import { prisma } from "../../../../lib/prisma"


export const fetchAllOrders = async (
  userId: string | null | undefined  
): Promise<Order[]> => {
  return prisma.order.findMany({
    where: { userId: userId ?? undefined },  
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


export const fetchOrderById = async (
  id: number,
  userId: string | null | undefined  
): Promise<Order | null> => {
  return prisma.order.findFirst({
    where: {
      id,
      userId: userId ?? undefined  
    },
    include: {
      items: {
        include: {
          part: true
        }
      }
    }
  })
}


export const createOrder = async (
  orderData: {
    items: Array<{
      id: string
      name: string
      price: number
      quantity: number
    }>
    total: number
  },
  userId: string | null | undefined 
): Promise<Order> => {
  const newOrder: Order = await prisma.order.create({
    data: {
      userId: userId!,  
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