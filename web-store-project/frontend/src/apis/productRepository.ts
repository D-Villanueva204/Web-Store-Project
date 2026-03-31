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

export async function fetchPartByID(id: string): Promise<Part> {
    const res = await fetch(`${BASE_URL}/api/v1/products/${id}`);
    const data = await res.json();
    return data.data;
}


// Functions to add per partType.

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

export async function getTypeByPart(part: Part): Promise<Part[] | null> {
    const res = await fetch(`${BASE_URL}/api/v1/products/${part.partType}`);
    const data = await res.json();
    return data.data;
};


export async function updateStock(part: Part, adding: boolean, amount: number): Promise<Part> {
    const res = await fetch(`${BASE_URL}/api/v1/products/${part.partType}/${part.id}/stock`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adding, amount })
    });
    const data = await res.json();
    return data.data;
}