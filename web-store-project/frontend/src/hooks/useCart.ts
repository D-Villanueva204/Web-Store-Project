import { useEffect, useState } from "react";
import { addItem, getTotal, removeItem, fetchItems, clearItems } from "../services/sidebarService";
import type { CartItem } from "../../../shared/types/CartItem";
import type { Part } from "../../../shared/types/PartTypes";

/**
 * Dominique Villanueva:
 * 
 * useCart is the hook used to tie together any cart state, and handles any 
 * adding to cart, removing from cart, and keeping track of total.
 * 
 */

export function useCart() {
    const [items, setItems] = useState<CartItem[]>([]);
    const [total, setTotal] = useState<number>(0);

    async function refreshCart() {
        const [cartItems, cartTotal] = await Promise.all([fetchItems(), getTotal()]);
        setItems(cartItems);
        setTotal(cartTotal);
    }

    useEffect(() => {
        refreshCart();
    }, []);

    const addItemsToCart = async (part: Part) => {
        const result = await addItem(part);
        if (result) await refreshCart();
    };

    const removeItemFromCart = async (cartItem: CartItem) => {
        await removeItem(cartItem);
        await refreshCart();
    };

    const clearAllItems = async () => {
        await clearItems();
        await refreshCart();
    };

    return { items, total, addItemsToCart, removeItemFromCart, clearAllItems, setItems };
}