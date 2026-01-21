import mobos from '../../../../../json/mobo.json' with { type: "json" };

function MotherboardSelector(name: string) {

    let mobo: Motherboard = null;
    for (const retrievedMobo of mobos) {
        if (retrievedMobo.name == name) {
            mobo = retrievedMobo;
        }
    };

    return mobo;
}

interface Motherboard {
    name: string;
    price: number;
    socket: string; 
    form_factor: string;
    max_memory: number;
    memory_slots: number;
}

export default MotherboardSelector;