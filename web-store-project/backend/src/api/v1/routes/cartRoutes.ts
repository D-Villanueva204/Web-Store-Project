import { Router } from "express";
import { requireAuth } from "@clerk/express";
import { findOrCreateUser } from "../middleware/findOrCreateUser";
import { getCart, addToCart, updateCartItem, removeCartItem, clearCart } from "../controllers/cartController";

const router = Router();

router.get("/cart", requireAuth(), findOrCreateUser, getCart);
router.post("/cart", requireAuth(), findOrCreateUser, addToCart);
router.put("/cart/:itemId", requireAuth(), findOrCreateUser, updateCartItem);
router.delete("/cart/:itemId", requireAuth(), findOrCreateUser, removeCartItem);
router.delete("/cart", requireAuth(), findOrCreateUser, clearCart);

export default router;