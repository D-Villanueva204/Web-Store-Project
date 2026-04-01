import type { CartItem } from "../../../shared/types/CartItem";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function getOrCreateCartId(): string {
    let cartId = localStorage.getItem("cartId");
    if (!cartId) {
        cartId = crypto.randomUUID();
        localStorage.setItem("cartId", cartId);
    }
    return cartId;
}

export async function fetchAllItems(): Promise<CartItem[]> {
    const cartId = getOrCreateCartId();
    const res = await fetch(`${BASE_URL}/api/v1/cart/${cartId}`);
    const data = await res.json();
    return data.data;
}

export async function addCartItem(partId: string): Promise<CartItem> {
    const cartId = getOrCreateCartId();
    const res = await fetch(`${BASE_URL}/api/v1/cart/${cartId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ partId })
    });
    const data = await res.json();
    return data.data;
}

export async function updateCartItem(itemId: string, quantity: number): Promise<CartItem | null> {
    const cartId = getOrCreateCartId();
    const res = await fetch(`${BASE_URL}/api/v1/cart/${cartId}/${itemId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity })
    });
    const data = await res.json();
    return data.data ?? null;
}

export async function removeCartItem(itemId: string): Promise<boolean> {
    const cartId = getOrCreateCartId();
    const res = await fetch(`${BASE_URL}/api/v1/cart/${cartId}/${itemId}`, {
        method: "DELETE"
    });
    const data = await res.json();
    return data.status === "success";
}

export async function clearCart(): Promise<boolean> {
    const cartId = getOrCreateCartId();
    const res = await fetch(`${BASE_URL}/api/v1/cart/${cartId}`, {
        method: "DELETE"
    });
    const data = await res.json();
    return data.status === "success";
}