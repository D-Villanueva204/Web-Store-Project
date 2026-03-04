import { addCartItem, removeCartItem, fetchAllItems, updateCartItem, clearCart } from "../repositories/sidebarRepository";
import type { CartItem } from "../sidebar/CartItem";
import { type Part  } from "../repositories/PartTypes";
import { getByType, validateStock } from "./productService";

export function addItem(part: Part): CartItem | null {
    if (fetchAllItems().length >= 10) {
        return null;
    }

    if (checkIfPartExists(part.id)) {
        for (const cartItem of fetchAllItems()) {
            if (cartItem.id == part.id) {
                if (part.stock == 0) {
                    return null;
                }
                if (validateStock(part, cartItem.quantity + 1)) {
                    updateCartItem(cartItem, (cartItem.quantity + 1));
                    return cartItem;
                }
                else {
                    return null;
                }
            }
        }
    }
    const newCartItem: CartItem = {
        id: part.id,
        name: part.name,
        price: part.price,
        quantity: 1
    }
    addCartItem(newCartItem);
    return newCartItem;
}

export function fetchItems(): CartItem[] {
    return fetchAllItems();
}

export function clearItems() {
    return clearCart();
}

export function removeItem(cartItem: CartItem): boolean {
    const allItems = fetchAllItems();

    for (const item of allItems) {
        if (item.id == cartItem.id) {
            removeCartItem(item);
            return true;
        }
    }

    return false;
}

export function getTotal(): number {
    let total = 0;
    for (const item of fetchAllItems()) {
        total = total + item.price;
    }

    return total;
};

function checkIfPartExists(itemId: string): boolean {
    const partType: string = itemId.split("-")[0];
    const partData = getByType(partType);
    if (partData) {
        for (const part of partData) {
            if (part.id === itemId) {
                return true;
            }
        }
    }

    return false;

}