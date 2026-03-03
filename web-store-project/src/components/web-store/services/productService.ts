import { fetchAllParts, addNewCPU, addNewCase, addNewCooler, addNewGPU, addNewMOBO, addNewOS, addNewPSU, addNewRAM, addNewStorage, getTypeByID, updateStock } from "../repositories/productRepository";
import type { Part, Case, Storage, Cooler, GPU, MOBO, OS, PSU, RAM, CPU } from "../repositories/PartTypes";
import { PartType } from "../repositories/PartTypes";

// getbytype
// getbyId
// AddPart generates new ID

export function validateStock(part: Part, quantity: number): boolean {
    const getAllParts = fetchAllParts();
    if (!getAllParts) {
        return false;
    }
    const partType = getTypeByID(part);
    if (partType) {
        const foundPart = partType.find((p) => p.id === part.id);
        if (foundPart) {
            return foundPart.stock >= quantity;
        }
    }
    return false;
}

export function getByType(id: string): Part[] | null {
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

export function getByID(id: string): Part | null {
    const prefix = id.split("-")[0];
    const array = getByType(prefix);
    if (array) {
        const foundPart = array.find((p) => p.id === id);
        return foundPart || null;
    } else {
        return null;
    }
}

export function addPart(part: Part): Part | null {
    const partType = getTypeByID(part);
    if (partType) {
        const newID = partType.length + 1;
        part.id = `${part.id.split("-")[0]}-${newID}`;
        switch (part.id.split("-")[0]) {
            case PartType.CASE:
                return addNewCase(part as Case);
            case PartType.COOLER:
                return addNewCooler(part as Cooler);
            case PartType.CPU:
                return addNewCPU(part as CPU);
            case PartType.GPU:
                return addNewGPU(part as GPU);
            case PartType.MOBO:
                return addNewMOBO(part as MOBO);
            case PartType.OS:
                return addNewOS(part as OS);
            case PartType.PSU:
                return addNewPSU(part as PSU);
            case PartType.RAM:
                return addNewRAM(part as RAM);
            case PartType.STORAGE:
                return addNewStorage(part as Storage);
            default:
                return null;
        }
    } else {
        return null;
    }
}