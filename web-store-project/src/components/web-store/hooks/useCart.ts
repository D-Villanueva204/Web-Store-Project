import { useState } from "react";
import { fetchAllItems, clearCart } from "../repositories/sidebarRepository";
import { addItem, getTotal, removeItem } from "../services/sidebarService";
import type { CartItem } from "../sidebar/CartItem";
import type { Part } from "../repositories/PartTypes";

export function useCart() {
    const [items, setItems] = useState<CartItem[]>(fetchAllItems());
    const [total, setTotal] = useState<number>(getTotal());

    function refreshCart() {
        setItems([...fetchAllItems()]);
    }

    const addItemsToCart = (part: Part) => {
        const result = addItem(part);
        if (result){
            setTotal(total + Number(part.price));
        }
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
        refreshCart();
    };

    return { items, total, addItemsToCart, removeItemFromCart, clearAllItems, setItems };

}