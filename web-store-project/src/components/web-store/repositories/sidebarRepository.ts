import type { CartItem } from "../sidebar/CartItem";

let cartItemData: CartItem[] = [
    { id: "cpu-0", name: "AMD Ryzen 7 9800X3D", price: 451.5, quantity: 1 }, { id: "cpu-1", name: "AMD Ryzen 7 7800X3D", price: 340.05, quantity: 1 }, { id: "cpu-2", name: "AMD Ryzen 5 7600X", price: 170.49, quantity: 1 }, { id: "cpu-3", name: "AMD Ryzen 5 9600X", price: 204.99, quantity: 1 }, { id: "cpu-4", name: "AMD Ryzen 7 7700X", price: 242.98, quantity: 1 }, { id: "cpu-5", name: "AMD Ryzen 9 9950X3D", price: 649.99, quantity: 1 }, { id: "cpu-6", name: "AMD Ryzen 5 5500", price: 74.22, quantity: 1 }, { id: "cpu-7", name: "AMD Ryzen 7 9700X", price: 305.89, quantity: 1 }, { id: "cpu-8", name: "AMD Ryzen 5 5600X", price: 158.99, quantity: 1 }, { id: "cpu-9", name: "AMD Ryzen 5 5600", price: 125.61, quantity: 1 }, { id: "cpu-10", name: "AMD Ryzen 7 5800X", price: 179.95, quantity: 1 }, { id: "cpu-11", name: "Intel Core i7-14700K", price: 297.17, quantity: 1 }, { id: "cpu-12", name: "Intel Core i9-14900K", price: 439, quantity: 1 }, { id: "cpu-13", name: "Intel Core i5-12400F", price: 108.99, quantity: 1 }, { id: "cpu-14", name: "AMD Ryzen 5 3600", price: 79.75, quantity: 1 }, { id: "cpu-15", name: "AMD Ryzen 5 7600", price: 196.97, quantity: 1 }, { id: "cpu-16", name: "AMD Ryzen 7 5700X", price: 154.99, quantity: 1 }, { id: "cpu-17", name: "AMD Ryzen 9 7900X", price: 314.11, quantity: 1 }, { id: "cpu-18", name: "AMD Ryzen 9 9900X", price: 359, quantity: 1 },];


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
                updateCartItem(item, (item.quantity - 1));
                return true;

            }
        }
    }

    return false;
}

export function clearCart(): boolean {
    cartItemData = [];
    return true;
}