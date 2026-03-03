import { useState } from "react";
import { fetchAllItems } from "../repositories/sidebarRepository";
import { addItem, removeItem } from "../services/sidebarService";
import type { CartItem } from "../sidebar/CartItem";
import type { Part } from "../repositories/PartTypes";

export function useCart() {
    const [items, setItems] = useState<CartItem[]>([]);

    const refreshCart = () => {
        setItems([...fetchAllItems()]);
    };

    const handleAddItem = (part: Part) => {
        addItem(part);
        refreshCart();
    };

    const handleRemoveItem = (item: CartItem) => {
        removeItem(item);
        refreshCart();
    };

    const calculateTotal = () => {
        return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    return {
        items,
        handleAddItem,
        handleRemoveItem,
        total: calculateTotal()
    };
}