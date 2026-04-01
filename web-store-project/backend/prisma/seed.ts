import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from '@prisma/client';

import cases from "../../shared/data/case.json";
import coolers from "../../shared/data/cooler.json";
import cpus from "../../shared/data/cpu.json";
import gpus from "../../shared/data/gpu.json";
import mobos from "../../shared/data/mobo.json";
import oss from "../../shared/data/os.json";
import psus from "../../shared/data/psu.json";
import rams from "../../shared/data/ram.json";
import storages from "../../shared/data/storage.json";

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
    await prisma.orderItem.deleteMany();
    await prisma.order.deleteMany();
    await prisma.case.deleteMany();
    await prisma.cooler.deleteMany();
    await prisma.cPU.deleteMany();
    await prisma.gPU.deleteMany();
    await prisma.mOBO.deleteMany();
    await prisma.oS.deleteMany();
    await prisma.pSU.deleteMany();
    await prisma.rAM.deleteMany();
    await prisma.storage.deleteMany();
    await prisma.part.deleteMany();

    const usedIds = new Set<string>();

    function makeId(prefix: string, name: string): string {
        const baseId = `${prefix}-${name.toLowerCase()}`;
        let id = baseId;
        let counter = 1;
        while (usedIds.has(id)) {
            id = `${baseId}-${counter++}`;
        }
        usedIds.add(id);
        return id;
    }

    for (const c of cases) {
        await prisma.part.create({
            data: {
                id: makeId("case", c.name),
                name: c.name,
                price: c.price,
                stock: c.stock,
                partType: 'CASE',
                case: {
                    create: {
                        type: c.type,
                        color: c.color,
                        psu: c.psu,
                        side_panel: c.side_panel,
                        external_volume: c.external_volume,
                        internal_35_bays: c.internal_35_bays,
                    }
                }
            }
        });
    }

    for (const item of cpus) {
        await prisma.part.create({
            data: {
                id: makeId("cpu", item.name),
                name: item.name,
                price: item.price,
                stock: item.stock,
                partType: 'CPU',
                cpu: {
                    create: {
                        core_count: item.core_count,
                        core_clock: item.core_clock,
                        boost_clock: item.boost_clock,
                        microarchitecture: item.microarchitecture ?? null,
                        tdp: item.tdp,
                        graphics: item.graphics ?? null,
                    }
                }
            }
        });
    }

    for (const item of gpus) {
        await prisma.part.create({
            data: {
                id: makeId("gpu", item.name),
                name: item.name,
                price: item.price,
                stock: item.stock,
                partType: 'GPU',
                gpu: {
                    create: {
                        chipset: item.chipset,
                        memory: item.memory,
                        core_clock: item.core_clock,
                        boost_clock: item.boost_clock ?? null,
                        color: item.color,
                        length: item.length,
                    }
                }
            }
        });
    }

    for (const item of mobos) {
        await prisma.part.create({
            data: {
                id: makeId("mobo", item.name),
                name: item.name,
                price: item.price,
                stock: item.stock,
                partType: 'MOBO',
                mobo: {
                    create: {
                        socket: item.socket,
                        form_factor: item.form_factor,
                        max_memory: item.max_memory,
                        memory_slots: item.memory_slots,
                        color: item.color,
                    }
                }
            }
        });
    }

    for (const item of psus) {
        await prisma.part.create({
            data: {
                id: makeId("psu", item.name),
                name: item.name,
                price: item.price,
                stock: item.stock,
                partType: 'PSU',
                psu: {
                    create: {
                        type: item.type,
                        efficiency: item.efficiency,
                        wattage: item.wattage,
                        modular: String(item.modular),
                        color: item.color ?? null,
                    }
                }
            }
        });
    }

    for (const item of storages) {
        await prisma.part.create({
            data: {
                id: makeId("storage", item.name),
                name: item.name,
                price: item.price,
                stock: item.stock,
                partType: 'STORAGE',
                storage: {
                    create: {
                        capacity: item.capacity,
                        price_per_gb: item.price_per_gb ?? null,
                        type: String(item.type),
                        cache: item.cache ?? null,
                        form_factor: String(item.form_factor),
                        interface: item.interface,
                    }
                }
            }
        });
    }

    for (const item of coolers) {
        await prisma.part.create({
            data: {
                id: makeId("cooler", item.name),
                name: item.name,
                price: item.price,
                stock: item.stock,
                partType: 'COOLER',
                cooler: {
                    create: {
                        rpm: Array.isArray(item.rpm) ? item.rpm.join(' - ') : String(item.rpm),
                        noise_level: Array.isArray(item.noise_level) ? item.noise_level.join(' - ') : String(item.noise_level ?? 'N/A'),
                        color: item.color,
                        size: item.size ?? null
                    }
                }
            }
        });
    }

    for (const item of oss) {
        await prisma.part.create({
            data: {
                id: makeId("os", item.name),
                name: item.name,
                price: item.price,
                stock: item.stock,
                partType: 'OS',
                os: {
                    create: {
                        mode: Array.isArray(item.mode) ? item.mode.join('/') : String(item.mode),
                        max_memory: item.max_memory,
                    }
                }
            }
        });
    }

    for (const item of rams) {
        await prisma.part.create({
            data: {
                id: makeId("ram", item.name),
                name: item.name,
                price: item.price,
                stock: item.stock,
                partType: 'RAM',
                ram: {
                    create: {
                        speed: `DDR${item.speed[0]}-${item.speed[1]}`,
                        modules: `${item.modules[0]} x ${item.modules[1]}GB`,
                        color: item.color,
                        first_word_latency: item.first_word_latency,
                        cas_latency: item.cas_latency,
                    }
                }
            }
        });
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });