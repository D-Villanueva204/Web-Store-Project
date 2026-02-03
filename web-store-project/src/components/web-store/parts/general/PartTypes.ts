import gpus from '../json/gpu.json'
import coolers from '../json/cooler.json'
import cpus from '../json/cpu.json'
import mobos from '../json/mobo.json'
import psus from '../json/psu.json'
import rams from '../json/ram.json'
import hds from '../json/storage.json';
import cases from '../json/case.json'
import os from '../json/os.json'

const PartTypes = {
    GPU: gpus,
    CPU: cpus,
    COOLER: coolers,
    MOBO: mobos,
    PSU: psus,
    RAM: rams,
    STORAGE: hds,
    CASE: cases,
    OS: os,
};

export default PartTypes;