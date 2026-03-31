import {
    fetchAllParts,
    fetchPartByID,
    addNewCase,
    addNewCooler,
    addNewCPU,
    addNewGPU,
    addNewMOBO,
    addNewOS,
    addNewPSU,
    addNewRAM,
    addNewStorage,
    updateStock
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

async function getByType(type: string):

export async function getByName(name: string, type: string): Promise<Part | null> {
    const parts = await getByType(type);
    if (!parts) return null;
    const productName = name.toLowerCase().trim();
    return parts.find(p => p.name.toLowerCase().trim() === productName) ?? null;
}

export async function addPart(part: Part): Promise<Part | null> {
    switch (part.partType) {
        case PartType.CASE: return addNewCase(part as Case);
        case PartType.COOLER: return addNewCooler(part as Cooler);
        case PartType.CPU: return addNewCPU(part as CPU);
        case PartType.GPU: return addNewGPU(part as GPU);
        case PartType.MOBO: return addNewMOBO(part as MOBO);
        case PartType.OS: return addNewOS(part as OS);
        case PartType.PSU: return addNewPSU(part as PSU);
        case PartType.RAM: return addNewRAM(part as RAM);
        case PartType.STORAGE: return addNewStorage(part as Storage);
        default: return null;
    }
}

export async function changeStock(part: Part, adding: boolean, amount: number): Promise<Part> {
    return updateStock(part, adding, amount);
}