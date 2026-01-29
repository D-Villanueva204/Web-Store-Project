import operatingSystem from '../json/cpu.json' with { type: "json" };

function OsSelector(name: string) {
    let os: os = null;
    for (const retrievedOs of operatingSystem) {
        if (retrievedOs.name == name) {
            os = retrievedOs;
        }
    };

    return os;
}

interface os {
    name: string;
    price: number;
}

export default OsSelector;