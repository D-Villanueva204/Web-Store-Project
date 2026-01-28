import gpus from '../json/gpu.json' with { type: "json" };

function GPUSelector(name: string) {

    let gpu: GPU = null;
    for (const retrievedGPU of gpus) {
        if (retrievedGPU.name == name) {
            gpu = retrievedGPU;
        }
    };

    return gpu;
}

export interface GPU {
    name: string;
    chipset: string;
    vram: number;
    price: number;
    stock: number;
}

export default GPUSelector;