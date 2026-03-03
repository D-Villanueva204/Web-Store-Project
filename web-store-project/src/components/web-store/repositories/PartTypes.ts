/**
 * Dominique Villanueva:
 * 
 * Previously, PartType would've linked to the data directly. In its current state,
 * it is simply an enum used for creating id's or doing validation.
 * 
 */

export const PartType = {
    CASE: "case",
    COOLER: "cooler",
    CPU: "cpu",
    GPU: "gpu",
    MOBO: "mobo",
    OS: "os",
    PSU: "psu",
    RAM: "ram",
    STORAGE: "storage"
};

/**
 * A new id field has been created for indexing and for more easier retrieval in the future.
 * For ease of comparison, Parts do now store their type.
 */
export interface Part {
    id: string,
    name: string,
    price: number,
    partType: string,
    stock: number
}

/**
 * Originally, a component would "clean" data for any null values, I've decided to simply let it be
 * since checking for null is very useful for checking if an attribute exists.
 * 
 */

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
    boost_clock: number | null,
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

export default PartType;
