import storage from '../json/mobo.json'

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