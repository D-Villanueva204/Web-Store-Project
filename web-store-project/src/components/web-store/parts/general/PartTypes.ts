import gpus from '../json/gpu.json'
import coolers from '../json/cooler.json'
import cpus from '../json/cpu.json'
import mobos from '../json/mobo.json'
import psus from '../json/psu.json'
import mems from '../json/ram.json'
import hds from '../json/storage.json';

const PartTypes = {
    GPU: gpus,
    CPU: cpus,
    COOLER: coolers,
    MOBO: mobos,
    PSU: psus,
    RAM: mems,
    STORAGE: hds
};

export default PartTypes;