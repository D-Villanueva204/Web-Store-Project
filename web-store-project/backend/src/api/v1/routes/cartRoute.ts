import { Router } from "express";
import { getCart, addToCart, updateCartItem, removeCartItem, clearCart } from "../controllers/cartController";

const router = Router();

router.get("/:cartId", getCart);
router.post("/:cartId", addToCart);
router.put("/:cartId/:itemId", updateCartItem);
router.delete("/:cartId/:itemId", removeCartItem);
router.delete("/:cartId", clearCart);

export default router;