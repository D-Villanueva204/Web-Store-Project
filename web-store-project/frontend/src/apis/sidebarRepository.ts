import type { CartItem } from "../../../shared/types/CartItem";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchAllItems(userId: string): Promise<CartItem[]> {
    const res = await fetch(`${BASE_URL}/api/v1/cart/${userId}`);
    const data = await res.json();
    return data.data;
}

export async function addCartItem(userId: string, partId: string): Promise<CartItem> {
    const res = await fetch(`${BASE_URL}/api/v1/cart/${userId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ partId })
    });
    const data = await res.json();
    return data.data;
}

export async function updateCartItem(userId: string, itemId: string, quantity: number): Promise<CartItem | null> {
    const res = await fetch(`${BASE_URL}/api/v1/cart/${userId}/${itemId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity })
    });
    const data = await res.json();
    return data.data ?? null;
}

export async function removeCartItem(userId: string, itemId: string): Promise<boolean> {
    const res = await fetch(`${BASE_URL}/api/v1/cart/${userId}/${itemId}`, {
        method: "DELETE"
    });
    const data = await res.json();
    return data.status === "success";
}

export async function clearCart(userId: string): Promise<boolean> {
    const res = await fetch(`${BASE_URL}/api/v1/cart/${userId}`, {
        method: "DELETE"
    });
    const data = await res.json();
    return data.status === "success";
}