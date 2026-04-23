import { addCartItem, removeCartItem, fetchAllItems, updateCartItem, clearCart } from "../apis/sidebarRepository";
import type { CartItem } from "../../../shared/types/CartItem";
import { type Part } from "../../../shared/types/PartTypes";
import { validateStock } from "./productService";

export async function addItem(part: Part, sessionToken: string | null): Promise<CartItem | null> {
    const allItems = await fetchAllItems(sessionToken);
    if (allItems.length >= 10) return null;
    if (part.stock === 0) return null;

    const existingItem = allItems.find(item => item.id === part.id);
    if (existingItem) {
        const newQuantity = existingItem.quantity + 1;
        if (!await validateStock(part, newQuantity)) return null;
        return await updateCartItem(existingItem.id, newQuantity, sessionToken);
    }
    return await addCartItem(part.id, sessionToken);
}

export async function fetchItems(sessionToken: string | null): Promise<CartItem[]> {
    return await fetchAllItems(sessionToken);
}

export async function clearItems(sessionToken: string | null): Promise<boolean> {
    return await clearCart(sessionToken);
}

export async function removeItem(cartItem: CartItem, sessionToken: string | null): Promise<boolean> {
    return await removeCartItem(cartItem.id, sessionToken);
}

export async function getTotal(sessionToken: string | null): Promise<number> {
    const allItems = await fetchAllItems(sessionToken);
    return allItems.reduce((total, item) => total + item.price * item.quantity, 0);
}