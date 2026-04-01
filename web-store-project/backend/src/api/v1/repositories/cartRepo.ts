import { prisma } from "../../../../lib/prisma";
import type { CartItem } from "../../../../../shared/types/CartItem";

function mapCartItem(item: {
    id: string;
    quantity: number;
    partId: string;
    cartId: string;
    part: {
        id: string;
        name: string;
        price: number;
        stock: number;
        partType: string;
    };
}): CartItem {
    return {
        id: item.id,
        name: item.part.name,
        price: item.part.price,
        quantity: item.quantity,
    };
}

export async function fetchCart(cartId: string): Promise<CartItem[]> {
    let cart = await prisma.cart.findUnique({
        where: { id: cartId },
        include: { items: { include: { part: true } } }
    });

    if (!cart) {
        cart = await prisma.cart.create({
            data: { id: cartId },
            include: { items: { include: { part: true } } }
        });
    }

    return cart.items.map(mapCartItem);
}

export async function addCartItem(cartId: string, partId: string): Promise<CartItem> {
    await fetchCart(cartId);

    const existingItem = await prisma.cartItem.findFirst({
        where: { cartId, partId },
        include: { part: true }
    });

    if (existingItem) {
        const updated = await prisma.cartItem.update({
            where: { id: existingItem.id },
            data: { quantity: existingItem.quantity + 1 },
            include: { part: true }
        });
        return mapCartItem(updated);
    }

    const newItem = await prisma.cartItem.create({
        data: { cartId, partId, quantity: 1 },
        include: { part: true }
    });

    return mapCartItem(newItem);
}

export async function updateCartItem(itemId: string, quantity: number): Promise<CartItem | null> {
    if (quantity <= 0) {
        await prisma.cartItem.delete({ where: { id: itemId } });
        return null;
    }

    const updated = await prisma.cartItem.update({
        where: { id: itemId },
        data: { quantity },
        include: { part: true }
    });

    return mapCartItem(updated);
}

export async function removeCartItem(itemId: string): Promise<boolean> {
    await prisma.cartItem.delete({ where: { id: itemId } });
    return true;
}

export async function clearCart(cartId: string): Promise<boolean> {
    await prisma.cartItem.deleteMany({ where: { cartId } });
    return true;
}