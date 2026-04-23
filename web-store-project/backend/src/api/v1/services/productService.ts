import * as productRepository from "../repositories/productRepo";
import type { 
  Part, 
  Case, 
  Cooler, 
  CPU, 
  GPU, 
  MOBO, 
  OS, 
  PSU, 
  RAM, 
  Storage 
} from "../../../../../shared/types/PartTypes";

export async function fetchAllParts(): Promise<Part[]> {
  return productRepository.fetchAllParts();
}

export async function searchParts(query: string): Promise<Part[]> {
    return productRepository.searchParts(query);
}

export async function fetchAllCases(): Promise<Case[]> {
  return productRepository.fetchAllCases();
}

export async function fetchCaseByID(id: string): Promise<Case | null> {
  return productRepository.fetchCaseByID(id);
}

export async function fetchAllCoolers(): Promise<Cooler[]> {
  return productRepository.fetchAllCoolers();
}

export async function fetchCoolerByID(id: string): Promise<Cooler | null> {
  return productRepository.fetchCoolerByID(id);
}

export async function fetchAllCPUs(): Promise<CPU[]> {
  return productRepository.fetchAllCPUs();
}

export async function fetchCPUByID(id: string): Promise<CPU | null> {
  return productRepository.fetchCPUByID(id);
}

export async function fetchAllGPUs(): Promise<GPU[]> {
  return productRepository.fetchAllGPUs();
}

export async function fetchGPUByID(id: string): Promise<GPU | null> {
  return productRepository.fetchGPUByID(id);
}

export async function fetchAllMOBOs(): Promise<MOBO[]> {
  return productRepository.fetchAllMOBOs();
}

export async function fetchMOBOByID(id: string): Promise<MOBO | null> {
  return productRepository.fetchMOBOByID(id);
}

export async function fetchAllOSs(): Promise<OS[]> {
  return productRepository.fetchAllOSs();
}

export async function fetchOSByID(id: string): Promise<OS | null> {
  return productRepository.fetchOSByID(id);
}

export async function fetchAllPSUs(): Promise<PSU[]> {
  return productRepository.fetchAllPSUs();
}

export async function fetchPSUByID(id: string): Promise<PSU | null> {
  return productRepository.fetchPSUByID(id);
}

export async function fetchAllRAMs(): Promise<RAM[]> {
  return productRepository.fetchAllRAMs();
}

export async function fetchRAMByID(id: string): Promise<RAM | null> {
  return productRepository.fetchRAMByID(id);
}

export async function fetchAllStorages(): Promise<Storage[]> {
  return productRepository.fetchAllStorages();
}

export async function fetchStorageByID(id: string): Promise<Storage | null> {
  return productRepository.fetchStorageByID(id);
}

export async function updateStock(id: string, adding: boolean, amount: number): Promise<Part> {
  return productRepository.updateStock(id, adding, amount);
}