import * as productRepository from "../repositories/productRepo";
import type { Part } from "../../../../../shared/types/PartTypes";

export async function fetchAllParts(): Promise<Part[]> {
    return productRepository.fetchAllParts();
}

export async function createCase(data: any): Promise<void> {
     productRepository.createCase(data);
}

export async function createCooler(data: any): Promise<void> {
     productRepository.createCooler(data);
}

export async function createCPU(data: any): Promise<void> {
     productRepository.createCPU(data);
}

export async function createGPU(data: any): Promise<void> {
     productRepository.createGPU(data);
}

export async function createMOBO(data: any): Promise<void> {
     productRepository.createMOBO(data);
}

export async function createOS(data: any): Promise<void> {
     productRepository.createOS(data);
}

export async function createPSU(data: any): Promise<void> {
     productRepository.createPSU(data);
}

export async function createRAM(data: any): Promise<void> {
     productRepository.createRAM(data);
}

export async function createStorage(data: any): Promise<void> {
     productRepository.createStorage(data);
}

export async function updateStock(id: string, adding: boolean, amount: number): Promise<Part> {
    return productRepository.updateStock(id, adding, amount);
}