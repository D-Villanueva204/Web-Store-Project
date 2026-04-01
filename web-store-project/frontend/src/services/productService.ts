import {
    fetchAllParts,
    fetchPartByID,
    updateStock,
    fetchAllCases,
    fetchAllCoolers,
    fetchAllCPUs,
    fetchAllGPUs,
    fetchAllMOBOs,
    fetchAllOSs,
    fetchAllPSUs,
    fetchAllRAMs,
    fetchAllStorages
} from "../apis/productRepository";
import type { Part, Case, Cooler, CPU, GPU, MOBO, OS, PSU, RAM, Storage } from "../../../shared/types/PartTypes";
import { PartType } from "../../../shared/types/PartTypes";

export async function getAllParts(): Promise<Part[]> {
    return fetchAllParts();
}

export async function validateStock(part: Part, quantity: number): Promise<boolean> {
    const fresh = await fetchPartByID(part.id);
    if (!fresh) return false;
    return fresh.stock >= quantity;
}

export async function getByID(id: string): Promise<Part | null> {
    return fetchPartByID(id);
}

export async function getByType(type: string): Promise<Cooler[] | Case[] | CPU[] | GPU[] | MOBO[] | MOBO[] | OS[] | PSU[] | RAM[] | Storage[] | undefined> {
    switch (type) {
        case PartType.CASE: return await fetchAllCases();
        case PartType.COOLER: return await fetchAllCoolers();
        case PartType.CPU: return await fetchAllCPUs();
        case PartType.GPU: return await fetchAllGPUs();
        case PartType.MOBO: return await fetchAllMOBOs();
        case PartType.OS: return await fetchAllOSs();
        case PartType.PSU: return await fetchAllPSUs();
        case PartType.RAM: return await fetchAllRAMs();
        case PartType.STORAGE: return await fetchAllStorages();
        default: break;
    }
}

export async function getByName(name: string, type: string): Promise<Part | null> {
    const parts = await getByType(type);
    if (!parts) return null;
    const productName = name.toLowerCase().trim();
    return parts.find(p => p.name.toLowerCase().trim() === productName) ?? null;
}

export async function changeStock(part: Part, adding: boolean, amount: number): Promise<Part> {
    return updateStock(part, adding, amount);
}