import cpus from '../json/cpu.json' with { type: "json" };

function CPUSelector(name: string) {

    let cpu: CPU = null;
    for (const retrievedCpu of cpus) {
        if (retrievedCpu.name == name) {
            cpu = retrievedCpu;
        }
    };

    return cpu;
}

export interface CPU {
    name: string;
    price: number;
    microarchitecture: string;
    core_count: number;
    core_block: number;
    stock: number;
}


export default CPUSelector;