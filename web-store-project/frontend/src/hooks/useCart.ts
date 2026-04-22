import { useEffect, useState } from "react";
import { addItem, getTotal, removeItem, fetchItems, clearItems } from "../services/sidebarService";
import { useAuth } from "@clerk/clerk-react";
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
    const { userId, isLoaded, getToken } = useAuth();

    async function refreshCart() {
        if (!isLoaded || !userId) return;
        const token = await getToken();
        const [cartItems, cartTotal] = await Promise.all([
            fetchItems(userId, token),
            getTotal(userId, token)
        ]);
        setItems(cartItems);
        setTotal(cartTotal);
    }

    useEffect(() => {
        refreshCart();
    }, []);

    const addItemsToCart = async (part: Part) => {
        const token = await getToken();
        const result = await addItem(userId!, part, token);
        if (result) await refreshCart();
    };

    const removeItemFromCart = async (cartItem: CartItem) => {
        const token = await getToken();
        await removeItem(userId!, cartItem, token);
        await refreshCart();
    };

    const clearAllItems = async () => {
        const token = await getToken();
        await clearItems(userId!, token);
        await refreshCart();
    };

    return { items, total, addItemsToCart, removeItemFromCart, clearAllItems, setItems };
}