import gpus from '../json/gpu.json'
import coolers from '../json/cooler.json'
import cpus from '../json/cpu.json'
import mobos from '../json/mobo.json'
import psus from '../json/psu.json'
import rams from '../json/ram.json'
import hds from '../json/storage.json';
import cases from '../json/case.json'
import os from '../json/os.json'

const PartTypes = {
    GPU: { name: "GPU", data: gpus },
    CPU: { name: "CPU", data: cpus },
    COOLER: { name: "COOLER", data: coolers },
    MOBO: { name: "MOBO", data: mobos },
    PSU: { name: "PSU", data: psus },
    RAM: { name: "RAM", data: rams },
    STORAGE: { name: "STORAGE", data: hds },
    CASE: { name: "CASE", data: cases },
    OS: { name: "OS", data: os },
};

export interface PartType {
    name: string,
    data: json
}

export interface Part {
    name: string,
    price: number,
    stock: number
}

export interface Case extends Part {
    type: string,
    color: string,
    psu: string,
    side_panel: string,
    external_volume: number,
    internal_35_bays: number
}

export interface Storage extends Part {
    capacity: number,
    price_per_gb: string,
    type: string,
    cache: number,
    form_factor: string,
    interface: string
}

export interface Cooler extends Part {
    rpm: number,
    noise_level: number | number[],
    color: string,
    size: number
}

export interface CPU extends Part {
    core_count: number,
    core_clock: number,
    boost_clock: number,
    microarchitecture: number,
    tdp: number,
    graphics: string,
}

export interface GPU extends Part {
    chipset: string,
    memory: number,
    core_clock: number,
    boost_clock: number,
    color: string,
    length: number,
}

export interface MOBO extends Part {
    socket: string,
    form_factor: string,
    max_memory: number,
    memory_slots: number,
    color: string,
}

export interface OS extends Part {
    mode: number,
    max_memory: number,
}

export interface PSU extends Part {
    type: string,
    efficiency: string,
    wattage: number,
    modular: string,
    color: string
}

export interface RAM extends Part {
    speed: number[],
    modules: number[],
    price_per_gb: number,
    color: string,
    first_word_latency: number,
    cas_latency: number,
}

export default PartTypes;