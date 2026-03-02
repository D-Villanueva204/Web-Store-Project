export enum PartType {
    CASE = "Case",
    COOLER = "Cooler",
    CPU = "CPU",
    GPU = "GPU",
    MOBO = "MOBO",
    OS = "OS",
    PSU = "PSU",
    RAM = "RAM",
    STORAGE = "Storage"
}
export interface Part {
    name: string,
    price: number,
    stock: number
}

export interface Case extends Part {
    type: string,
    color: string,
    psu: string | null,
    side_panel: string,
    external_volume: number,
    internal_35_bays: number
}

export interface Storage extends Part {
    capacity: number,
    price_per_gb: number | null,
    type: string | number,
    cache: number | null,
    form_factor: string | number,
    interface: string
}

export interface Cooler extends Part {
    rpm: number | number[],
    noise_level: number | number[] | null,
    color: string,
    size: number | null
}

export interface CPU extends Part {
    core_count: number,
    core_clock: number,
    boost_clock: number,
    microarchitecture: string | null,
    tdp: number,
    graphics: string | null,
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
    mode: number | number[],
    max_memory: number,
}

export interface PSU extends Part {
    type: string,
    efficiency: string,
    wattage: number,
    modular: string | boolean,
    color: string | null
}

export interface RAM extends Part {
    speed: number[],
    modules: number[]
    color: string,
    first_word_latency: number,
    cas_latency: number,
}
