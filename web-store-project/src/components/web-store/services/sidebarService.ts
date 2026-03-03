import { addCartItem, removeCartItem, fetchAllItems, updateCartItem } from "../repositories/sidebarRepository";
import type { CartItem } from "../sidebar/CartItem";
import { type Part, PartType } from "../repositories/PartTypes";
import { fetchAllParts } from "../repositories/productRepository";

export function addItem(part: Part): CartItem | null {

    if (fetchAllItems().length >= 10) {
        return null;
    }

    if (checkIfPartExists(part.id)) {
        for (const cartItem of fetchAllItems()) {
            if (cartItem.id == part.id) {
                if (part.stock == 0) {
                    return null;
                }
                updateCartItem(cartItem, (cartItem.quantity + 1));
                return cartItem;
            }
        }
    }
    const newCartItem: CartItem = {
        id: part.id,
        name: part.name,
        price: part.price,
        quantity: 1
    }
    addCartItem(newCartItem);
    return newCartItem;
}

export function removeItem(cartItem: CartItem): boolean {
    const allItems = fetchAllItems();

    for (const item of allItems) {
        if (item.id == cartItem.id) {
            removeCartItem(item);
            return true;
        }
    }

    return false;
}

function checkIfPartExists(itemId: string): boolean {
    const partType: string = itemId.split("-")[0];
    const partData = getPartType(partType);

    if (partData) {
        for (const part of partData) {
            if (part.id == itemId) {
                return true;
            }
        }
    }

    return false;

}

function getPartType(id: string): Part[] | null {
    const allItems = fetchAllParts();
    switch (id) {
        case PartType.CASE:
            return allItems.caseData;
        case PartType.COOLER:
            return allItems.coolerData;
        case PartType.CPU:
            return allItems.cpuData;
        case PartType.GPU:
            return allItems.gpuData;
        case PartType.MOBO:
            return allItems.moboData;
        case PartType.OS:
            return allItems.osData;
        case PartType.PSU:
            return allItems.psuData;
        case PartType.RAM:
            return allItems.ramData;
        case PartType.STORAGE:
            return allItems.storageData;
        default:
            return null;
    }
}
