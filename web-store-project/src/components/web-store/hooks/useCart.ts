import { useState } from "react";
import { fetchAllItems, clearCart } from "../repositories/sidebarRepository";
import { addItem, removeItem } from "../services/sidebarService";
import type { CartItem } from "../sidebar/CartItem";
import type { Part } from "../repositories/PartTypes";

export function useCart() {
    const [items, setItems] = useState<CartItem[]>([]);
    const [total, setTotal] = useState<number>(0.00);

    function refreshCart() {
        setItems([...fetchAllItems()]);
    }

    const addItemsToCart = (part: Part) => {
        addItem(part);
        setTotal(total + Number(part.price));
        refreshCart();
    };

    const removeItemFromCart = (cartItem: CartItem) => {
        removeItem(cartItem);
        setTotal(total - Number(cartItem.price));
        refreshCart();
    };

    const clearAllItems = () => {
        clearCart();
        setTotal(0.00);
    };

    return { items, total, addItemsToCart, removeItemFromCart, clearAllItems };

}