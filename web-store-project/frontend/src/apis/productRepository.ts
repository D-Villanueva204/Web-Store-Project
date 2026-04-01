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
 
// Add functions per partType (keep your existing ones)
export async function addNewCase(newCase: Case): Promise<Case> {
  const res = await fetch(`${BASE_URL}/api/v1/products/case`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCase)
  });
  const data = await res.json();
  return data.data;
}
 
export async function addNewCooler(newCooler: Cooler): Promise<Cooler> {
  const res = await fetch(`${BASE_URL}/api/v1/products/cooler`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCooler)
  });
  const data = await res.json();
  return data.data;
}
 
export async function addNewCPU(newCPU: CPU): Promise<CPU> {
  const res = await fetch(`${BASE_URL}/api/v1/products/cpu`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newCPU)
  });
  const data = await res.json();
  return data.data;
}
 
export async function addNewGPU(newGPU: GPU): Promise<GPU> {
  const res = await fetch(`${BASE_URL}/api/v1/products/gpu`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newGPU)
  });
  const data = await res.json();
  return data.data;
}
 
export async function addNewMOBO(newMOBO: MOBO): Promise<MOBO> {
  const res = await fetch(`${BASE_URL}/api/v1/products/mobo`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newMOBO)
  });
  const data = await res.json();
  return data.data;
}
 
export async function addNewOS(newOS: OS): Promise<OS> {
  const res = await fetch(`${BASE_URL}/api/v1/products/os`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newOS)
  });
  const data = await res.json();
  return data.data;
}
 
export async function addNewPSU(newPSU: PSU): Promise<PSU> {
  const res = await fetch(`${BASE_URL}/api/v1/products/psu`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPSU)
  });
  const data = await res.json();
  return data.data;
}
 
export async function addNewRAM(newRAM: RAM): Promise<RAM> {
  const res = await fetch(`${BASE_URL}/api/v1/products/ram`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newRAM)
  });
  const data = await res.json();
  return data.data;
}
 
export async function addNewStorage(newStorage: Storage): Promise<Storage> {
  const res = await fetch(`${BASE_URL}/api/v1/products/storage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newStorage)
  });
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