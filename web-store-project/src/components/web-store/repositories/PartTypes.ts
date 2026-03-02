import gpus from '../parts/json/gpu.json'
import coolers from '../parts/json/cooler.json'
import cpus from '../parts/json/cpu.json'
import mobos from '../parts/json/mobo.json'
import psus from '../parts/json/psu.json'
import rams from '../parts/json/ram.json'
import hds from '../parts/json/storage.json';
import cases from '../parts/json/case.json'
import os from '../parts/json/os.json'

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
    data: JSON
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