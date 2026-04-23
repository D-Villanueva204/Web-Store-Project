import { CartItem } from "../../../../../shared/types/CartItem";
import * as cartRepo from "../repositories/cartRepo";

export async function fetchCart(userId: string): Promise<CartItem[]> {
    return cartRepo.fetchCart(userId);
}

export async function addItemToCart(userId: string, partId: string) {
    return cartRepo.addCartItem(userId, partId);
}

export async function updateItemQuantity(itemId: string, quantity: number) {
    return cartRepo.updateCartItem(itemId, quantity);
}

export async function removeItemFromCart(itemId: string) {
    return cartRepo.removeCartItem(itemId);
}

export async function clearCartItems(userId: string) {
    return cartRepo.clearCart(userId);
}