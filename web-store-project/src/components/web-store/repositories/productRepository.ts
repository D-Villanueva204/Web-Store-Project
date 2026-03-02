import cases from '../json/case.json'
import coolers from '../json/cooler.json'
import cpus from '../json/cpu.json'
import gpus from '../json/gpu.json'
import mobos from '../json/mobo.json'
import oss from '../json/os.json'
import psus from '../json/psu.json'
import rams from '../json/ram.json'
import storages from '../json/storage.json'

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

export function fetchAllExecutives(): Part[] {
    return executiveData;
}

export function fetchExistingPartTypes(): string[] {
    return existingPartTypes;
}

export function createExecutive(executive: Part): Part {
    executiveData.push(executive);
    if (!existingPartTypes.includes(executive.Part)) {
        existingPartTypes.push(executive.Part);
    }
    return executive;
}

function initializeData() {
    for (const pcCase of cases) {
        caseData.push(pcCase);
    }
    for (const cooler of coolers) {
        coolerData.push(cooler);
    }
    for (const cpu of cpus) {
        cpuData.push(cpu);
    }
    for (const gpu of gpus) {
        gpuData.push(gpu);
    }
    for (const mobo of mobos) {
        moboData.push(mobo);
    }
    for (const os of oss) {
        osData.push(os);
    }
    for (const psu of psus) {
        psuData.push(psu);
    }
    for (const ram of rams) {
        ramData.push(ram);
    }
    for (const storage of storages) {
        storageData.push(storage);
    }
}