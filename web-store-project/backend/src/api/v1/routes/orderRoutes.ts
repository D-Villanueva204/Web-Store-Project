import express, { Router } from "express"
import { requireAuth } from "@clerk/express";
import { validateRequest } from "../middleware/validate"
import { createOrderSchema, getOrderByIdSchema } from "../validations/orderSchema"
import * as orderController from "../controllers/orderController"

const router: Router = express.Router()

router.get("/orders", requireAuth(), orderController.getAllOrders)

router.get("/orders/:id", requireAuth(),
  validateRequest(getOrderByIdSchema), 
  orderController.getOrderById
)

router.post("/orders", requireAuth(),
  validateRequest(createOrderSchema),
  orderController.createOrder
)

export default router