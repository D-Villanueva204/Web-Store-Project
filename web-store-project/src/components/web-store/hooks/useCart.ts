import { useState } from "react";
import { fetchAllItems } from "../repositories/sidebarRepository";
import { addItem, removeItem } from "../services/sidebarService";
import type { CartItem } from "../sidebar/CartItem";
import type { Part } from "../repositories/PartTypes";

export function useCart() {
    const [items, setItems] = useState<CartItem[]>([]);

    function refreshCart() {
        setItems([...fetchAllItems()]);
    }

    const addItemsToCart = (part: Part) => {
        addItem(part);
        refreshCart();
    };

    const removeItemFromCart = (cartItem: CartItem) => {
        removeItem(cartItem);
        refreshCart();
    };

    return { items, addItemsToCart, removeItemFromCart };

}