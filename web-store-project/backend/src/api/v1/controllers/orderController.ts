import { Request, Response, NextFunction } from "express"
import * as orderService from "../services/orderService"
import { successResponse } from "../models/responseModel"

/**
 * GET /api/v1/orders
 * Get all orders
 */
export const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const orders = await orderService.fetchAllOrders(req.userId)
    res.status(200).json(
      successResponse(orders, "Orders retrieved successfully")
    )
  } catch (error) {
    next(error)
  }
}

/**
 * GET /api/v1/orders/:id
 * Get order by ID
 */
export const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id = parseInt(req.params.id as string)
    const order = await orderService.fetchOrderById(id, req.userId)

    if (!order) {
      res.status(404).json({
        status: "error",
        message: "Order not found"
      })
      return
    }

    res.status(200).json(
      successResponse(order, "Order retrieved successfully")
    )
  } catch (error) {
    next(error)
  }
}

/**
 * POST /api/v1/orders
 * Create new order
 */
export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newOrder = await orderService.createOrder(req.body, req.userId)
    res.status(201).json(
      successResponse(newOrder, "Order created successfully")
    )
  } catch (error) {
    next(error)
  }
}