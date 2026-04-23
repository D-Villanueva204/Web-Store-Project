import express, { Router } from "express"
import { validateRequest } from "../middleware/validate"
import { createOrderSchema, getOrderByIdSchema } from "../validations/orderSchema"
import * as orderController from "../controllers/orderController"

const router: Router = express.Router()

router.get("/orders", orderController.getAllOrders)

router.get("/orders/:id", 
  validateRequest(getOrderByIdSchema), 
  orderController.getOrderById
)

router.post("/orders", 
  validateRequest(createOrderSchema),
  orderController.createOrder
)

export default router