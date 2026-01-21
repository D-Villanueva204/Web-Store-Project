import cpus from '../json/cpu.json' with { type: "json" };

function CoolerSelector(name: string) {

    let cpu: cpu = null;
    for (const retrievedCpu of cpus) {
        if (retrievedCpu.name == name) {
            cpu = retrievedCpu;
        }
    };

    return cpu;
}

interface cpu {
    name: string;
    price: number;
    microarchitecture: string;
    core_count: number;
    core_block: number;
}


export default CoolerSelector;