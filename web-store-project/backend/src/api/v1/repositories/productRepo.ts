import { prisma } from "../../../../lib/prisma";
import type { Case, Cooler, CPU, GPU, MOBO, OS, Part, PSU, RAM, Storage } from "../../../../../shared/types/PartTypes";

export async function fetchAllParts(): Promise<Part[]> {
    return prisma.part.findMany();
}

export async function fetchPartByID(id: string): Promise<Part> {
    return prisma.part.findUnique({
        where: { id },
        include: {
            case: true,
            cooler: true,
            cpu: true,
            gpu: true,
            mobo: true,
            os: true,
            psu: true,
            ram: true,
            storage: true,
        }
    });
}

export async function createCase(data: any): Promise<Case> {
    return prisma.part.create({
        data: {
            name: data.name,
            price: data.price,
            stock: data.stock,
            partType: 'CASE',
            case: {
                create: {
                    type: data.type,
                    color: data.color,
                    psu: data.psu ?? null,
                    side_panel: data.side_panel,
                    external_volume: data.external_volume,
                    internal_35_bays: data.internal_35_bays,
                }
            }
        },
        include: { case: true }
    });
}

export async function createCooler(data: any): Promise<Cooler> {
    return prisma.part.create({
        data: {
            name: data.name,
            price: data.price,
            stock: data.stock,
            partType: 'COOLER',
            cooler: {
                create: {
                    rpm: data.rpm,
                    noise_level: data.noise_level,
                    color: data.color,
                    size: data.size ?? null,
                }
            }
        },
        include: { cooler: true }
    });
}

export async function createCPU(data: any): Promise<CPU> {
    return prisma.part.create({
        data: {
            name: data.name,
            price: data.price,
            stock: data.stock,
            partType: 'CPU',
            cpu: {
                create: {
                    core_count: data.core_count,
                    core_clock: data.core_clock,
                    boost_clock: data.boost_clock,
                    microarchitecture: data.microarchitecture ?? null,
                    tdp: data.tdp,
                    graphics: data.graphics ?? null,
                }
            }
        },
        include: { cpu: true }
    });
}

export async function createGPU(data: any): Promise<GPU> {
    return prisma.part.create({
        data: {
            name: data.name,
            price: data.price,
            stock: data.stock,
            partType: 'GPU',
            gpu: {
                create: {
                    chipset: data.chipset,
                    memory: data.memory,
                    core_clock: data.core_clock,
                    boost_clock: data.boost_clock ?? null,
                    color: data.color,
                    length: data.length,
                }
            }
        },
        include: { gpu: true }
    });
}

export async function createMOBO(data: any): Promise<MOBO> {
    return prisma.part.create({
        data: {
            name: data.name,
            price: data.price,
            stock: data.stock,
            partType: 'MOBO',
            mobo: {
                create: {
                    socket: data.socket,
                    form_factor: data.form_factor,
                    max_memory: data.max_memory,
                    memory_slots: data.memory_slots,
                    color: data.color,
                }
            }
        },
        include: { mobo: true }
    });
}

export async function createOS(data: any): Promise<OS> {
    return prisma.part.create({
        data: {
            name: data.name,
            price: data.price,
            stock: data.stock,
            partType: 'OS',
            os: {
                create: {
                    mode: data.mode,
                    max_memory: data.max_memory,
                }
            }
        },
        include: { os: true }
    });
}

export async function createPSU(data: any): Promise<PSU> {
    return prisma.part.create({
        data: {
            name: data.name,
            price: data.price,
            stock: data.stock,
            partType: 'PSU',
            psu: {
                create: {
                    type: data.type,
                    efficiency: data.efficiency,
                    wattage: data.wattage,
                    modular: data.modular,
                    color: data.color ?? null,
                }
            }
        },
        include: { psu: true }
    });
}

export async function createRAM(data: any): Promise<RAM> {
    return prisma.part.create({
        data: {
            name: data.name,
            price: data.price,
            stock: data.stock,
            partType: 'RAM',
            ram: {
                create: {
                    speed: data.speed,
                    modules: data.modules,
                    color: data.color,
                    first_word_latency: data.first_word_latency,
                    cas_latency: data.cas_latency,
                }
            }
        },
        include: { ram: true }
    });
}

export async function createStorage(data: any): Promise<Storage> {
    return prisma.part.create({
        data: {
            name: data.name,
            price: data.price,
            stock: data.stock,
            partType: 'STORAGE',
            storage: {
                create: {
                    capacity: data.capacity,
                    price_per_gb: data.price_per_gb ?? null,
                    type: data.type,
                    cache: data.cache ?? null,
                    form_factor: data.form_factor,
                    interface: data.interface,
                }
            }
        },
        include: { storage: true }
    });
}

export async function updateStock(id: string, adding: boolean, amount: number) {
    const amountChanged = adding ? amount : -amount;
    return prisma.part.update({
        where: { id },
        data: { stock: { increment: amountChanged } }
    });
}