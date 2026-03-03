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

export function removeCartItem(cartItem: CartItem): boolean {
    for (const item of fetchAllItems()) {
        if (item.id === cartItem.id) {
            const remaining = cartItem.quantity - 1;

            if (remaining == 0) {
                cartItemData = cartItemData.filter(item => item.id !== cartItem.id);
                return true;
            }
            else {
                updateCartItem(cartItem, (cartItem.quantity - 1));
                return true;

            }
        }
    }

    return false;
}