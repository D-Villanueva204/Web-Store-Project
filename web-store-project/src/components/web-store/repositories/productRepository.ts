import cases from '../parts/json/case.json'
import coolers from '../parts/json/cooler.json'
import cpus from '../parts/json/cpu.json'
import gpus from '../parts/json/gpu.json'
import mobos from '../parts/json/mobo.json'
import oss from '../parts/json/os.json'
import psus from '../parts/json/psu.json'
import rams from '../parts/json/ram.json'
import storages from '../parts/json/storage.json'

import { PartType, type Case, type Cooler, type CPU, type GPU, type MOBO, type OS, type PSU, type RAM, type Storage } from "./PartTypes";

const caseData: Case[] = [];
const coolerData: Cooler[] = [];
const cpuData: CPU[] = [];
const gpuData: GPU[] = [];
const moboData: MOBO[] = [];
const osData: OS[] = [];
const psuData: PSU[] = [];
const ramData: RAM[] = [];
const storageData: Storage[] = [];

const partData = { caseData, coolerData, cpuData, gpuData, moboData, osData, psuData, ramData, storageData }

initializeData();

export function fetchAllParts() {
    return partData;
}
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

function initializeData() {
    for (const part of cases) {
        const pcCase: Case = {
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
    for (const cooler of coolers) {
        const pcCooler: Cooler = {
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
    for (const cpu of cpus) {
        const pcCpu: CPU = {
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
    for (const gpu of gpus) {
        const pcGpu: GPU = {
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
    for (const mobo of mobos) {
        const pcMobo: MOBO = {
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
    for (const os of oss) {
        const pcOs: OS = {
            name: os.name,
            price: os.price,
            partType: PartType.OS,
            stock: os.stock,
            mode: os.mode,
            max_memory: os.max_memory
        }
        osData.push(pcOs);
    }
    for (const psu of psus) {
        const pcPsu: PSU = {
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
    for (const ram of rams) {
        const pcRam: RAM = {
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
    for (const storage of storages) {
        const pcStorage: Storage = {
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