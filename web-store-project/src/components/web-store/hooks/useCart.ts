import { useState } from "react";
import { fetchAllItems } from "../repositories/sidebarRepository";
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

    return { items, total, addItemsToCart, removeItemFromCart };

}