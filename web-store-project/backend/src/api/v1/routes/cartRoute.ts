import { Router } from "express";
import { getCart, addToCart, updateCartItem, removeCartItem, clearCart } from "../controllers/cartController";

const router = Router();

router.get("/cart/:cartId", getCart);
router.post("/cart/:cartId", addToCart);
router.put("/cart/:cartId/:itemId", updateCartItem);
router.delete("/cart/:cartId/:itemId", removeCartItem);
router.delete("/cart/:cartId", clearCart);

export default router;