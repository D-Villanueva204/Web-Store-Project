// Imports
import cases from '../parts/json/case.json'
import coolers from '../parts/json/cooler.json'
import cpus from '../parts/json/cpu.json'
import gpus from '../parts/json/gpu.json'
import mobos from '../parts/json/mobo.json'
import oss from '../parts/json/os.json'
import psus from '../parts/json/psu.json'
import rams from '../parts/json/ram.json'
import storages from '../parts/json/storage.json'

// Import for PartTypes
import { type Part, PartType, type Case, type Cooler, type CPU, type GPU, type MOBO, type OS, type PSU, type RAM, type Storage } from "./PartTypes";

// All the different part data, in types.
const caseData: Case[] = [];
const coolerData: Cooler[] = [];
const cpuData: CPU[] = [];
const gpuData: GPU[] = [];
const moboData: MOBO[] = [];
const osData: OS[] = [];
const psuData: PSU[] = [];
const ramData: RAM[] = [];
const storageData: Storage[] = [];

// The main "data"
const partData = { caseData, coolerData, cpuData, gpuData, moboData, osData, psuData, ramData, storageData }

// The function to run to initalize all the data.
initializeData();

/**
 * Retrieves all parts. Any further parsing will be in service.
 * 
 * @returns all partData.
 */
export function fetchAllParts() {
    return partData;
}

// Functions to add per partType.

export function addNewCase(newCase: Case): Case {
    caseData.push(newCase);
    return newCase;
}
export function addNewCooler(newCooler: Cooler): Cooler {
    coolerData.push(newCooler);
    return newCooler;
}
export function addNewCPU(newCPU: CPU): CPU {
    cpuData.push(newCPU);
    return newCPU;
}
export function addNewGPU(newGPU: GPU): GPU {
    gpuData.push(newGPU);
    return newGPU;
}
export function addNewMOBO(newMOBO: MOBO): MOBO {
    moboData.push(newMOBO);
    return newMOBO;
}
export function addNewOS(newOS: OS): OS {
    osData.push(newOS);
    return newOS;
}
export function addNewPSU(newPSU: PSU): PSU {
    psuData.push(newPSU);
    return newPSU;
}
export function addNewRAM(newRAM: RAM): RAM {
    ramData.push(newRAM);
    return newRAM;
}
export function addNewStorage(newStorage: Storage): Storage {
    storageData.push(newStorage);
    return newStorage;
}

export function getTypeByID(part: Part): Part[] | null {
    const id: string = part.id.split("-")[0];
    switch (id) {
        case PartType.CASE:
            return caseData;
        case PartType.COOLER:
            return coolerData;
        case PartType.CPU:
            return cpuData;
        case PartType.GPU:
            return gpuData;
        case PartType.MOBO:
            return moboData;
        case PartType.OS:
            return osData;
        case PartType.PSU:
            return psuData;
        case PartType.RAM:
            return ramData;
        case PartType.STORAGE:
            return storageData;
        default:
            return null;
    }
};

export function updateStock(part: Part, adding: boolean, amount: number): boolean {
    const amountChanged = (adding) ? amount : (amount * -1);
    const data: Part[] | null = getTypeByID(part);
    if (data) {
        for (const retrievedPart of data) {
            if (retrievedPart.id == part.id) {
                retrievedPart.stock += amountChanged;
                return true;
            }
        }
    }
    return false;
};

function initializeData() {
    let count = 0;
    for (const part of cases) {
        count++;
        const pcCase: Case = {
            id: `${(PartType.CASE).toLowerCase()}-${count}`,
            name: part.name,
            price: part.price,
            partType: PartType.CASE,
            stock: part.stock,
            type: part.type,
            color: part.color,
            psu: part.psu,
            side_panel: part.side_panel,
            external_volume: part.external_volume,
            internal_35_bays: part.internal_35_bays
        }
        caseData.push(pcCase);
    }
    count = 0;
    for (const cooler of coolers) {
        count++;
        const pcCooler: Cooler = {
            id: `${(PartType.COOLER).toLowerCase()}-${count}`,
            name: cooler.name,
            price: cooler.price,
            partType: PartType.COOLER,
            stock: cooler.stock,
            rpm: cooler.rpm,
            noise_level: cooler.noise_level,
            color: cooler.color,
            size: cooler.size
        }
        coolerData.push(pcCooler);
    }
    count = 0;
    for (const cpu of cpus) {
        count++;
        const pcCpu: CPU = {
            id: `${(PartType.CPU).toLowerCase()}-${count}`,
            name: cpu.name,
            price: cpu.price,
            partType: PartType.CPU,
            stock: cpu.stock,
            core_count: cpu.core_count,
            core_clock: cpu.core_clock,
            boost_clock: cpu.boost_clock,
            microarchitecture: cpu.microarchitecture,
            tdp: cpu.tdp,
            graphics: cpu.graphics
        }
        cpuData.push(pcCpu);
    }
    count = 0;
    for (const gpu of gpus) {
        count++;
        const pcGpu: GPU = {
            id: `${(PartType.GPU).toLowerCase()}-${count}`,
            name: gpu.name,
            price: gpu.price,
            partType: PartType.GPU,
            stock: gpu.stock,
            chipset: gpu.chipset,
            memory: gpu.memory,
            core_clock: gpu.core_clock,
            boost_clock: gpu.boost_clock,
            color: gpu.color,
            length: gpu.length
        }
        gpuData.push(pcGpu);
    }
    count = 0;
    for (const mobo of mobos) {
        count++;
        const pcMobo: MOBO = {
            id: `${(PartType.MOBO).toLowerCase()}-${count}`,
            name: mobo.name,
            price: mobo.price,
            partType: PartType.MOBO,
            stock: mobo.stock,
            socket: mobo.socket,
            form_factor: mobo.form_factor,
            max_memory: mobo.max_memory,
            memory_slots: mobo.memory_slots,
            color: mobo.color
        }
        moboData.push(pcMobo);
    }
    count = 0;
    for (const os of oss) {
        count++;
        const pcOs: OS = {
            id: `${(PartType.OS).toLowerCase()}-${count}`,
            name: os.name,
            price: os.price,
            partType: PartType.OS,
            stock: os.stock,
            mode: os.mode,
            max_memory: os.max_memory
        }
        osData.push(pcOs);
    }
    count = 0;
    for (const psu of psus) {
        count++;
        const pcPsu: PSU = {
            id: `${(PartType.PSU).toLowerCase()}-${count}`,
            name: psu.name,
            price: psu.price,
            partType: PartType.PSU,
            stock: psu.stock,
            type: psu.type,
            efficiency: psu.efficiency,
            wattage: psu.wattage,
            modular: psu.modular,
            color: psu.color
        }
        psuData.push(pcPsu);
    }
    count = 0;
    for (const ram of rams) {
        count++;
        const pcRam: RAM = {
            id: `${(PartType.RAM).toLowerCase()}-${count}`,
            name: ram.name,
            price: ram.price,
            partType: PartType.RAM,
            stock: ram.stock,
            speed: ram.speed,
            modules: ram.modules,
            color: ram.color,
            first_word_latency: ram.first_word_latency,
            cas_latency: ram.cas_latency
        }
        ramData.push(pcRam);
    }
    count = 0;
    for (const storage of storages) {
        count++;
        const pcStorage: Storage = {
            id: `${(PartType.STORAGE).toLowerCase()}-${count}`,
            name: storage.name,
            price: storage.price,
            partType: PartType.STORAGE,
            stock: storage.stock,
            capacity: storage.capacity,
            price_per_gb: storage.price_per_gb,
            type: storage.type,
            cache: storage.cache,
            form_factor: storage.form_factor,
            interface: storage.interface
        }
        storageData.push(pcStorage);
    }
}