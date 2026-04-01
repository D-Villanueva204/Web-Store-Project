import { Request, Response } from "express";
import { fetchCart, addItemToCart, updateItemQuantity, removeItemFromCart, clearCartItems } from "../services/cartService";

export async function getCart(req: Request, res: Response) {
    try {
        const cart = await fetchCart(req.params.cartId as string);
        res.json({ status: "success", data: cart, message: "Cart retrieved successfully" });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Failed to retrieve cart" });
    }
}

export async function addToCart(req: Request, res: Response) {
    try {
        const { partId } = req.body;
        if (!partId) return res.status(400).json({ status: "error", message: "partId is required" });
        const item = await addItemToCart(req.params.cartId as string, partId);
        res.json({ status: "success", data: item, message: "Item added to cart" });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Failed to add item to cart" });
    }
}

export async function updateCartItem(req: Request, res: Response) {
    try {
        const { quantity } = req.body;
        if (quantity == null) return res.status(400).json({ status: "error", message: "quantity is required" });
        const item = await updateItemQuantity(req.params.itemId as string, quantity);
        res.json({ status: "success", data: item, message: "Cart item updated" });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Failed to update cart item" });
    }
}

export async function removeCartItem(req: Request, res: Response) {
    try {
        await removeItemFromCart(req.params.itemId as string);
        res.json({ status: "success", message: "Item removed from cart" });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Failed to remove item" });
    }
}

export async function clearCart(req: Request, res: Response) {
    try {
        await clearCartItems(req.params.cartId as string);
        res.json({ status: "success", message: "Cart cleared" });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Failed to clear cart" });
    }
}