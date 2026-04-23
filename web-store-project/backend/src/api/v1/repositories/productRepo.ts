import { prisma } from "../../../../lib/prisma";
import { type Case, type Cooler, type CPU, type GPU, type MOBO, type OS, type Part, type PSU, type RAM, type Storage } from "../../../../../shared/types/PartTypes";

export async function fetchAllParts(): Promise<Part[]> {
  return prisma.part.findMany();
}

export async function searchParts(query: string): Promise<Part[]> {
    return prisma.part.findMany({
        where: {
            name: {
                contains: query,
                mode: "insensitive"
            }
        },
        take: 10
    });
}

export async function fetchAllCases(): Promise<Case[]> {
  const parts = await prisma.part.findMany({
    where: { partType: 'CASE' },
    include: { case: true }
  });

  return parts.map(part => ({
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    type: part.case!.type,
    color: part.case!.color,
    psu: part.case!.psu,
    side_panel: part.case!.side_panel,
    external_volume: part.case!.external_volume,
    internal_35_bays: part.case!.internal_35_bays
  }));
}

export async function fetchCaseByID(id: string): Promise<Case | null> {
  const part = await prisma.part.findUnique({
    where: { id },
    include: { case: true }
  });

  if (!part || !part.case) return null;

  return {
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    type: part.case.type,
    color: part.case.color,
    psu: part.case.psu,
    side_panel: part.case.side_panel,
    external_volume: part.case.external_volume,
    internal_35_bays: part.case.internal_35_bays
  };
}

export async function fetchAllCoolers(): Promise<Cooler[]> {
  const parts = await prisma.part.findMany({
    where: { partType: 'COOLER' },
    include: { cooler: true }
  });

  return parts.map(part => ({
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    rpm: part.cooler!.rpm.includes(' - ')
      ? part.cooler!.rpm.split(' - ').map(Number)
      : Number(part.cooler!.rpm),
    noise_level: part.cooler!.noise_level && part.cooler!.noise_level !== 'N/A'
      ? (part.cooler!.noise_level.includes(' - ')
        ? part.cooler!.noise_level.split(' - ').map(Number)
        : Number(part.cooler!.noise_level))
      : null,
    color: part.cooler!.color,
    size: part.cooler!.size
  }));
}

export async function fetchCoolerByID(id: string): Promise<Cooler | null> {
  const part = await prisma.part.findUnique({
    where: { id },
    include: { cooler: true }
  });

  if (!part || !part.cooler) return null;

  return {
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    rpm: part.cooler.rpm.includes(' - ')
      ? part.cooler.rpm.split(' - ').map(Number)
      : Number(part.cooler.rpm),
    noise_level: part.cooler.noise_level && part.cooler.noise_level !== 'N/A'
      ? (part.cooler.noise_level.includes(' - ')
        ? part.cooler.noise_level.split(' - ').map(Number)
        : Number(part.cooler.noise_level))
      : null,
    color: part.cooler.color,
    size: part.cooler.size
  };
}

export async function fetchAllCPUs(): Promise<CPU[]> {
  const parts = await prisma.part.findMany({
    where: { partType: 'CPU' },
    include: { cpu: true }
  });

  return parts.map(part => ({
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    core_count: part.cpu!.core_count,
    core_clock: part.cpu!.core_clock,
    boost_clock: part.cpu!.boost_clock,
    microarchitecture: part.cpu!.microarchitecture,
    tdp: part.cpu!.tdp,
    graphics: part.cpu!.graphics
  }));
}

export async function fetchCPUByID(id: string): Promise<CPU | null> {
  const part = await prisma.part.findUnique({
    where: { id },
    include: { cpu: true }
  });

  if (!part || !part.cpu) return null;

  return {
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    core_count: part.cpu.core_count,
    core_clock: part.cpu.core_clock,
    boost_clock: part.cpu.boost_clock,
    microarchitecture: part.cpu.microarchitecture,
    tdp: part.cpu.tdp,
    graphics: part.cpu.graphics
  };
}

export async function fetchAllGPUs(): Promise<GPU[]> {
  const parts = await prisma.part.findMany({
    where: { partType: 'GPU' },
    include: { gpu: true }
  });

  return parts.map(part => ({
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    chipset: part.gpu!.chipset,
    memory: part.gpu!.memory,
    core_clock: part.gpu!.core_clock,
    boost_clock: part.gpu!.boost_clock,
    color: part.gpu!.color,
    length: part.gpu!.length
  }));
}

export async function fetchGPUByID(id: string): Promise<GPU | null> {
  const part = await prisma.part.findUnique({
    where: { id },
    include: { gpu: true }
  });

  if (!part || !part.gpu) return null;

  return {
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    chipset: part.gpu.chipset,
    memory: part.gpu.memory,
    core_clock: part.gpu.core_clock,
    boost_clock: part.gpu.boost_clock,
    color: part.gpu.color,
    length: part.gpu.length
  };
}

export async function fetchAllMOBOs(): Promise<MOBO[]> {
  const parts = await prisma.part.findMany({
    where: { partType: 'MOBO' },
    include: { mobo: true }
  });

  return parts.map(part => ({
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    socket: part.mobo!.socket,
    form_factor: part.mobo!.form_factor,
    max_memory: part.mobo!.max_memory,
    memory_slots: part.mobo!.memory_slots,
    color: part.mobo!.color
  }));
}

export async function fetchMOBOByID(id: string): Promise<MOBO | null> {
  const part = await prisma.part.findUnique({
    where: { id },
    include: { mobo: true }
  });

  if (!part || !part.mobo) return null;

  return {
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    socket: part.mobo.socket,
    form_factor: part.mobo.form_factor,
    max_memory: part.mobo.max_memory,
    memory_slots: part.mobo.memory_slots,
    color: part.mobo.color
  };
}

export async function fetchAllOSs(): Promise<OS[]> {
  const parts = await prisma.part.findMany({
    where: { partType: 'OS' },
    include: { os: true }
  });

  return parts.map(part => ({
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    mode: part.os!.mode.includes('/')
      ? part.os!.mode.split('/').map(Number)
      : Number(part.os!.mode),
    max_memory: part.os!.max_memory
  }));
}

export async function fetchOSByID(id: string): Promise<OS | null> {
  const part = await prisma.part.findUnique({
    where: { id },
    include: { os: true }
  });

  if (!part || !part.os) return null;

  return {
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    mode: part.os.mode.includes('/')
      ? part.os.mode.split('/').map(Number)
      : Number(part.os.mode),
    max_memory: part.os.max_memory
  };
}

export async function fetchAllPSUs(): Promise<PSU[]> {
  const parts = await prisma.part.findMany({
    where: { partType: 'PSU' },
    include: { psu: true }
  });

  return parts.map(part => ({
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    type: part.psu!.type,
    efficiency: part.psu!.efficiency,
    wattage: part.psu!.wattage,
    modular: part.psu!.modular,
    color: part.psu!.color
  }));
}

export async function fetchPSUByID(id: string): Promise<PSU | null> {
  const part = await prisma.part.findUnique({
    where: { id },
    include: { psu: true }
  });

  if (!part || !part.psu) return null;

  return {
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    type: part.psu.type,
    efficiency: part.psu.efficiency,
    wattage: part.psu.wattage,
    modular: part.psu.modular,
    color: part.psu.color
  };
}

export async function fetchAllRAMs(): Promise<RAM[]> {
  const parts = await prisma.part.findMany({
    where: { partType: 'RAM' },
    include: { ram: true }
  });

  return parts.map(part => ({
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    speed: (() => {
      const match = part.ram!.speed.match(/DDR(\d+)-(\d+)/);
      return match ? [parseInt(match[1]), parseInt(match[2])] : [0, 0];
    })(),
    modules: (() => {
      const match = part.ram!.modules.match(/(\d+) x (\d+)GB/);
      return match ? [parseInt(match[1]), parseInt(match[2])] : [0, 0];
    })(),
    color: part.ram!.color,
    first_word_latency: part.ram!.first_word_latency,
    cas_latency: part.ram!.cas_latency
  }));
}

export async function fetchRAMByID(id: string): Promise<RAM | null> {
  const part = await prisma.part.findUnique({
    where: { id },
    include: { ram: true }
  });

  if (!part || !part.ram) return null;

  return {
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    speed: (() => {
      const match = part.ram.speed.match(/DDR(\d+)-(\d+)/);
      return match ? [parseInt(match[1]), parseInt(match[2])] : [0, 0];
    })(),
    modules: (() => {
      const match = part.ram.modules.match(/(\d+) x (\d+)GB/);
      return match ? [parseInt(match[1]), parseInt(match[2])] : [0, 0];
    })(),
    color: part.ram.color,
    first_word_latency: part.ram.first_word_latency,
    cas_latency: part.ram.cas_latency
  };
}

export async function fetchAllStorages(): Promise<Storage[]> {
  const parts = await prisma.part.findMany({
    where: { partType: 'STORAGE' },
    include: { storage: true }
  });

  return parts.map(part => ({
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    capacity: part.storage!.capacity,
    price_per_gb: part.storage!.price_per_gb,
    type: part.storage!.type,
    cache: part.storage!.cache,
    form_factor: part.storage!.form_factor,
    interface: part.storage!.interface
  }));
}

export async function fetchStorageByID(id: string): Promise<Storage | null> {
  const part = await prisma.part.findUnique({
    where: { id },
    include: { storage: true }
  });

  if (!part || !part.storage) return null;

  return {
    id: part.id,
    name: part.name,
    price: part.price,
    stock: part.stock,
    partType: part.partType.toLowerCase(),
    capacity: part.storage.capacity,
    price_per_gb: part.storage.price_per_gb,
    type: part.storage.type,
    cache: part.storage.cache,
    form_factor: part.storage.form_factor,
    interface: part.storage.interface
  };
}
export async function createCase(data: any): Promise<void> {
  const id = `case-${data.name.toLowerCase()}`;

  await prisma.part.create({
    data: {
      id: id,
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

export async function createCooler(data: any): Promise<void> {
  const id = `cooler-${data.name.toLowerCase()}`;

  await prisma.part.create({
    data: {
      id: id,
      name: data.name,
      price: data.price,
      stock: data.stock,
      partType: 'COOLER',
      cooler: {
        create: {
          rpm: Array.isArray(data.rpm) ? data.rpm.join(' - ') : String(data.rpm),
          noise_level: Array.isArray(data.noise_level) ? data.noise_level.join(' - ') : String(data.noise_level ?? 'N/A'),
          color: data.color,
          size: data.size ?? null,
        }
      }
    },
    include: { cooler: true }
  });
}

export async function createCPU(data: any): Promise<void> {
  const id = `cpu-${data.name.toLowerCase()}`;

  await prisma.part.create({
    data: {
      id: id,
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

export async function createGPU(data: any): Promise<void> {
  const id = `gpu-${data.name.toLowerCase()}`;

  await prisma.part.create({
    data: {
      id: id,
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

export async function createMOBO(data: any): Promise<void> {
  const id = `mobo-${data.name.toLowerCase()}`;

  await prisma.part.create({
    data: {
      id: id,
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

export async function createOS(data: any): Promise<void> {
  const id = `os-${data.name.toLowerCase()}`;
  await prisma.part.create({
    data: {
      id: id,
      name: data.name,
      price: data.price,
      stock: data.stock,
      partType: 'OS',
      os: {
        create: {
          mode: Array.isArray(data.mode) ? data.mode.join('/') : String(data.mode),
          max_memory: data.max_memory,
        }
      }
    },
    include: { os: true }
  });
}

export async function createPSU(data: any): Promise<void> {
  const id = `psu-${data.name.toLowerCase()}`;

  await prisma.part.create({
    data: {
      id: id,
      name: data.name,
      price: data.price,
      stock: data.stock,
      partType: 'PSU',
      psu: {
        create: {
          type: data.type,
          efficiency: data.efficiency,
          wattage: data.wattage,
          modular: String(data.modular),
          color: data.color ?? null,
        }
      }
    },
    include: { psu: true }
  });
}

export async function createRAM(data: any): Promise<void> {
  const id = `ram-${data.name.toLowerCase()}`;

  await prisma.part.create({
    data: {
      id: id,
      name: data.name,
      price: data.price,
      stock: data.stock,
      partType: 'RAM',
      ram: {
        create: {
          speed: `DDR${data.speed[0]}-${data.speed[1]}`,
          modules: `${data.modules[0]} x ${data.modules[1]}GB`,
          color: data.color,
          first_word_latency: data.first_word_latency,
          cas_latency: data.cas_latency,
        }
      }
    },
    include: { ram: true }
  });
}

export async function createStorage(data: any): Promise<void> {
  const id = `storage-${data.name.toLowerCase()}`;

  await prisma.part.create({
    data: {
      id: id,
      name: data.name,
      price: data.price,
      stock: data.stock,
      partType: 'STORAGE',
      storage: {
        create: {
          capacity: data.capacity,
          price_per_gb: data.price_per_gb ?? null,
          type: String(data.type),
          cache: data.cache ?? null,
          form_factor: String(data.form_factor),
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