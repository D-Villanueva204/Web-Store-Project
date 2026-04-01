import { addCartItem, removeCartItem, fetchAllItems, updateCartItem, clearCart } from "../apis/sidebarRepository";
import type { CartItem } from "../../../shared/types/CartItem";
import { type Part } from "../../../shared/types/PartTypes";
import { validateStock } from "./productService";

export async function addItem(part: Part): Promise<CartItem | null> {
    const allItems = await fetchAllItems();

    if (allItems.length >= 10) {
        return null;
    }

    if (part.stock === 0) {
        return null;
    }

    const existingItem = allItems.find(item => item.id === part.id);

    if (existingItem) {
        const newQuantity = existingItem.quantity + 1;
        if (!await validateStock(part, newQuantity)) {
            return null;
        }
        return await updateCartItem(existingItem.id, newQuantity);
    }

    return await addCartItem(part.id);
}

export async function fetchItems(): Promise<CartItem[]> {
    return await fetchAllItems();
}

export async function clearItems(): Promise<boolean> {
    return await clearCart();
}

export async function removeItem(cartItem: CartItem): Promise<boolean> {
    return await removeCartItem(cartItem.id);
}

export async function getTotal(): Promise<number> {
    const allItems = await fetchAllItems();
    return allItems.reduce((total, item) => total + item.price * item.quantity, 0);
}