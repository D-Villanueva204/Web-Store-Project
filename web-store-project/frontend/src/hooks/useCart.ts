import { useState } from "react";
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
    const [items, setItems] = useState<CartItem[]>(fetchItems());
    const [total, setTotal] = useState<number>(getTotal());

    function refreshCart() {
        setItems([...fetchItems()]);
    }

    const addItemsToCart = (part: Part) => {
        const result = addItem(part);
        if (result) {
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
        clearItems();
        setTotal(0.00);
        refreshCart();
    };

    return { items, total, addItemsToCart, removeItemFromCart, clearAllItems, setItems };

}