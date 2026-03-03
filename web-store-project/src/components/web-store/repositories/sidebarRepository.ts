import type { CartItem } from "../sidebar/CartItem";

let cartItemData: CartItem[] = [];

export function fetchAllItems(): CartItem[] {
    return cartItemData;
}

export function addCartItem(cartItem: CartItem): CartItem {
    cartItemData.push(cartItem);
    return cartItem;
}

export function updateCartItem(cartItem: CartItem, quantity: number): boolean {
    for (const item of fetchAllItems()) {
        if (item.id === cartItem.id) {
            item.quantity = quantity;
            return true;
        }
    }

    return false;
}

export function removeCartItem(cartItem: CartItem): CartItem {
    const remaining = cartItem.quantity - 1;

    if (remaining >= 0) {
        cartItemData = cartItemData.filter(item => item.id !== cartItem.id);
    }
    else {
        cartItem.quantity = cartItem.quantity - 1;
    }

    return cartItem;
}