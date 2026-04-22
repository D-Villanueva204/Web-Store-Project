import { addCartItem, removeCartItem, fetchAllItems, updateCartItem, clearCart } from "../apis/sidebarRepository";
import type { CartItem } from "../../../shared/types/CartItem";
import { type Part } from "../../../shared/types/PartTypes";
import { validateStock } from "./productService";

export async function addItem(userId: string, part: Part): Promise<CartItem | null> {
    const allItems = await fetchAllItems(userId);
    if (allItems.length >= 10) return null;
    if (part.stock === 0) return null;

    const existingItem = allItems.find(item => item.id === part.id);
    if (existingItem) {
        const newQuantity = existingItem.quantity + 1;
        if (!await validateStock(part, newQuantity)) return null;
        return await updateCartItem(userId, existingItem.id, newQuantity);
    }
    return await addCartItem(userId, part.id);
}

export async function fetchItems(userId: string): Promise<CartItem[]> {
    return await fetchAllItems(userId);
}

export async function clearItems(userId: string): Promise<boolean> {
    return await clearCart(userId);
}

export async function removeItem(userId: string, cartItem: CartItem): Promise<boolean> {
    return await removeCartItem(userId, cartItem.id);
}

export async function getTotal(userId: string): Promise<number> {
    const allItems = await fetchAllItems(userId);
    return allItems.reduce((total, item) => total + item.price * item.quantity, 0);
}