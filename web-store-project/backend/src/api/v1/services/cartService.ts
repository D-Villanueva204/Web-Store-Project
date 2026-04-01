import { CartItem } from "../../../../../shared/types/CartItem";
import * as cartRepo from "../repositories/cartRepo";
import { prisma } from "../../../../lib/prisma";

export async function fetchCart(cartId: string): Promise<CartItem[]> {
    return cartRepo.fetchCart(cartId);
}

export async function addItemToCart(cartId: string, partId: string) {
    await fetchCart(cartId);

    const existingItem = await prisma.cartItem.findFirst({
        where: { cartId, partId }
    });

    if (existingItem) {
        return await prisma.cartItem.update({
            where: { id: existingItem.id },
            data: { quantity: existingItem.quantity + 1 },
            include: { part: true }
        });
    }

    return await prisma.cartItem.create({
        data: { cartId, partId, quantity: 1 },
        include: { part: true }
    });
}

export async function updateItemQuantity(itemId: string, quantity: number) {
    if (quantity <= 0) {
        return await prisma.cartItem.delete({ where: { id: itemId } });
    }
    return await prisma.cartItem.update({
        where: { id: itemId },
        data: { quantity },
        include: { part: true }
    });
}

export async function removeItemFromCart(itemId: string) {
    return await prisma.cartItem.delete({ where: { id: itemId } });
}

export async function clearCartItems(cartId: string) {
    return await prisma.cartItem.deleteMany({ where: { cartId } });
}