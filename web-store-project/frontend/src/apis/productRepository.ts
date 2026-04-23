// Import for PartTypes
import { type Part, type Case, type Cooler, type CPU, type GPU, type MOBO, type OS, type PSU, type RAM, type Storage } from "../../../shared/types/PartTypes";
 
const BASE_URL = import.meta.env.VITE_API_BASE_URL;
 
/**
* Retrieves all parts. Any further parsing will be in service.
*
* @returns all partData.
*/
export async function fetchAllParts(): Promise<Part[]> {
  const res = await fetch(`${BASE_URL}/api/v1/products`);
  const data = await res.json();
  return data.data;
}

export async function searchParts(query: string) {
    const res = await fetch(`${BASE_URL}/api/v1/products/search?query=${query}`);
    const data = await res.json();
    return data.data;
}
 
export async function fetchAllCoolers(): Promise<Cooler[]> {
  const res = await fetch(`${BASE_URL}/api/v1/products/cooler`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchPartByID(id: string): Promise<Part> {
  const res = await fetch(`${BASE_URL}/api/v1/products/${id}`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchAllCases(): Promise<Case[]> {
  const res = await fetch(`${BASE_URL}/api/v1/products/case`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchCaseByID(id: string): Promise<Case> {
  const res = await fetch(`${BASE_URL}/api/v1/products/case/${id}`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchAllCPUs(): Promise<CPU[]> {
  const res = await fetch(`${BASE_URL}/api/v1/products/cpu`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchCPUByID(id: string): Promise<CPU> {
  const res = await fetch(`${BASE_URL}/api/v1/products/cpu/${id}`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchAllGPUs(): Promise<GPU[]> {
  const res = await fetch(`${BASE_URL}/api/v1/products/gpu`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchGPUByID(id: string): Promise<GPU> {
  const res = await fetch(`${BASE_URL}/api/v1/products/gpu/${id}`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchAllMOBOs(): Promise<MOBO[]> {
  const res = await fetch(`${BASE_URL}/api/v1/products/mobo`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchMOBOByID(id: string): Promise<MOBO> {
  const res = await fetch(`${BASE_URL}/api/v1/products/mobo/${id}`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchAllOSs(): Promise<OS[]> {
  const res = await fetch(`${BASE_URL}/api/v1/products/os`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchOSByID(id: string): Promise<OS> {
  const res = await fetch(`${BASE_URL}/api/v1/products/os/${id}`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchAllPSUs(): Promise<PSU[]> {
  const res = await fetch(`${BASE_URL}/api/v1/products/psu`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchPSUByID(id: string): Promise<PSU> {
  const res = await fetch(`${BASE_URL}/api/v1/products/psu/${id}`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchAllRAMs(): Promise<RAM[]> {
  const res = await fetch(`${BASE_URL}/api/v1/products/ram`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchRAMByID(id: string): Promise<RAM> {
  const res = await fetch(`${BASE_URL}/api/v1/products/ram/${id}`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchAllStorages(): Promise<Storage[]> {
  const res = await fetch(`${BASE_URL}/api/v1/products/storage`);
  const data = await res.json();
  return data.data;
}
 
export async function fetchStorageByID(id: string): Promise<Storage> {
  const res = await fetch(`${BASE_URL}/api/v1/products/storage/${id}`);
  const data = await res.json();
  return data.data;
}
 
export async function updateStock(part: Part, adding: boolean, amount: number): Promise<Part> {
  const res = await fetch(`${BASE_URL}/api/v1/products/${part.partType}/${part.id}/stock`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ adding, amount })
  });
  const data = await res.json();
  return data.data;
}