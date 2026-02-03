import PartTypes from "../parts/general/PartTypes";

const categoryMap: Record<string, any[]> = {
    CASE: PartTypes.CASE,
    COOLER: PartTypes.COOLER,
    CPU: PartTypes.CPU,
    GPU: PartTypes.GPU,
    MOBO: PartTypes.MOBO,
    PSU: PartTypes.PSU,
    RAM: PartTypes.RAM,
    STORAGE: PartTypes.STORAGE,
    OS: PartTypes.OS,
};

export const getRandomProducts = (partType: string, count: number) => {
    const products = categoryMap[partType];
    const shuffled = products.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

export const loadCategory = (category: string): any[] => {
    const data = categoryMap[category];
    if (data.length > 10) {
        return getRandomProducts(category, 10);
    } else {
        return data;
    }
};

export default categoryMap;