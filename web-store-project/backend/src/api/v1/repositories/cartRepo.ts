import { prisma } from "../../../../lib/prisma";
import type { CartItem } from "../../../../../shared/types/CartItem";

export async function fetchCart(userId: string): Promise<CartItem[]> {
    let cart = await prisma.cart.findUnique({
        where: { userId },
        include: { items: { include: { part: true } } }
    });
    if (!cart) {
        cart = await prisma.cart.create({
            data: { userId },
            include: { items: { include: { part: true } } }
        });
    }
    return cart.items.map(item => ({
        id: item.id,
        partId: item.partId,
        name: item.part.name,
        price: item.part.price,
        quantity: item.quantity,
    }));
}

export async function addCartItem(userId: string, partId: string): Promise<CartItem> {
    const cart = await prisma.cart.findUnique({ where: { userId } });
    const existingItem = await prisma.cartItem.findFirst({
        where: { cartId: cart!.id, partId },
        include: { part: true }
    });
    if (existingItem) {
        const updated = await prisma.cartItem.update({
            where: { id: existingItem.id },
            data: { quantity: existingItem.quantity + 1 },
            include: { part: true }
        });
        return {
            id: updated.id,
            name: updated.part.name,
            price: updated.part.price,
            quantity: updated.quantity,
        };
    }
    const newItem = await prisma.cartItem.create({
        data: { cartId: cart!.id, partId, quantity: 1 },
        include: { part: true }
    });
    return {
        id: newItem.id,
        name: newItem.part.name,
        price: newItem.part.price,
        quantity: newItem.quantity,
    };
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
    return {
        id: updated.id,
        name: updated.part.name,
        price: updated.part.price,
        quantity: updated.quantity,
    };
}

export async function removeCartItem(itemId: string): Promise<boolean> {
    await prisma.cartItem.delete({ where: { id: itemId } });
    return true;
}

export async function clearCart(userId: string): Promise<boolean> {
    const cart = await prisma.cart.findUnique({ where: { userId } });
    if (!cart) return true;
    await prisma.cartItem.deleteMany({ where: { cartId: cart.id } });
    return true;
}