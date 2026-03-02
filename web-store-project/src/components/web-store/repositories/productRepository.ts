import cases from '../parts/json/case.json'
import coolers from '../parts/json/cooler.json'
import cpus from '../parts/json/cpu.json'
import gpus from '../parts/json/gpu.json'
import mobos from '../parts/json/mobo.json'
import oss from '../parts/json/os.json'
import psus from '../parts/json/psu.json'
import rams from '../parts/json/ram.json'
import storages from '../parts/json/storage.json'

import type { Part, Case, Cooler, CPU, GPU, MOBO, OS, PSU, RAM, Storage } from "./PartTypes";

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

function initializeData() {
    for (const part of cases) {
        const pcCase: Case = {
            name: part.name,
            price: part.price,
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