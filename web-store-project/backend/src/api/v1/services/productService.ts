import * as productRepository from "../repositories/productRepo";
import type { Part, Case, Cooler, CPU, GPU, MOBO, OS, PSU, RAM, Storage } from "../../../../../shared/types/PartTypes";

export async function fetchAllParts(): Promise<Part[]> {
    return productRepository.fetchAllParts();
}

export async function fetchPartByID(id: string): Promise<Part | null> {
    return productRepository.fetchPartByID(id);
}

export async function createCase(data: any): Promise<Case> {
    return productRepository.createCase(data);
}

export async function createCooler(data: any): Promise<Cooler> {
    return productRepository.createCooler(data);
}

export async function createCPU(data: any): Promise<CPU> {
    return productRepository.createCPU(data);
}

export async function createGPU(data: any): Promise<GPU> {
    return productRepository.createGPU(data);
}

export async function createMOBO(data: any): Promise<MOBO> {
    return productRepository.createMOBO(data);
}

export async function createOS(data: any): Promise<OS> {
    return productRepository.createOS(data);
}

export async function createPSU(data: any): Promise<PSU> {
    return productRepository.createPSU(data);
}

export async function createRAM(data: any): Promise<RAM> {
    return productRepository.createRAM(data);
}

export async function createStorage(data: any): Promise<Storage> {
    return productRepository.createStorage(data);
}

export async function updateStock(id: string, adding: boolean, amount: number): Promise<Part> {
    const part = await productRepository.fetchPartByID(id);
    if (!part) throw new Error("Part not found");
    return productRepository.updateStock(id, adding, amount);
}