import coolers from '../json/cooler.json' with { type: "json" };

function CoolerSelector(name: string) {

    let cooler: Cooler = null;
    for (const retrievedCooler of coolers) {
        if (retrievedCooler.name == name) {
            cooler = retrievedCooler;
        }
    };

    return cooler;
}

interface Cooler {
    name: string;
    price: number;
}


export default CoolerSelector;