import cases from "../../../../json/case.json"
import coolers from "../../../../json/coolers.json"
import cpu from "../../../../json/cpu.json"
import storage from "../../../../json/storage.json"
import ram from "../../../../json/ram.json"
import os from "../../../../json/os.json"
import psu from "../../../../json/psu.json"
import gpu from "../../../../json/gpu.json"
import motherboard from "../../../../json/motherboard.json"

function PartSelector({ text }: { text: string }) {
    const categories = {
        "cases": cases,
        "coolers": coolers,
        "cpu": cpu,
        "storage": storage,
        "ram": ram,
        "os": os,
        "psu": psu,
        "gpu": gpu,
        "motherboard": motherboard
    }

    const categoryArray = categories[text];

    const randomIndex = Math.floor(Math.random() * categoryArray.length);
    const part = categoryArray[randomIndex];
    let price = "Out of Stock";

    if (part.price) {
        price = part.price
    }

    console.log(part);

    return (
        <section className="part-section">

            <div>
                {part.name}
            </div>
            <div>
                {price}
            </div>
        </section>
    )
}

export default PartSelector;