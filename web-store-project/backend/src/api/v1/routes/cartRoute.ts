import { Router } from "express";
import { getCart, addToCart, updateCartItem, removeCartItem, clearCart } from "../controllers/cartController";

const router = Router();

router.get("/cart", getCart);
router.post("/cart", addToCart);
router.put("/cart/:itemId", updateCartItem);
router.delete("/cart/:itemId", removeCartItem);
router.delete("/cart", clearCart);

export default router;