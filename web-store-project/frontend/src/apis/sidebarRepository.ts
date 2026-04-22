import type { CartItem } from "../../../shared/types/CartItem";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchAllItems(token: string | null): Promise<CartItem[]> {
    const res = await fetch(`${BASE_URL}/api/v1/cart`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    return data.data;
}

export async function addCartItem(partId: string, token: string | null): Promise<CartItem> {
    const res = await fetch(`${BASE_URL}/api/v1/cart`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ partId })
    });
    const data = await res.json();
    return data.data;
}

export async function updateCartItem(itemId: string, quantity: number, token: string | null): Promise<CartItem | null> {
    const res = await fetch(`${BASE_URL}/api/v1/cart/${itemId}`, {
        method: "PUT",
        headers: { 
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ quantity })
    });
    const data = await res.json();
    return data.data ?? null;
}

export async function removeCartItem(itemId: string, token: string | null): Promise<boolean> {
    const res = await fetch(`${BASE_URL}/api/v1/cart/${itemId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    return data.status === "success";
}

export async function clearCart(token: string | null): Promise<boolean> {
    const res = await fetch(`${BASE_URL}/api/v1/cart`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    return data.status === "success";
}