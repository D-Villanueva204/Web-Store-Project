import psu from '../json/psu.json'

function PSUGenerator() {
    const randomIndex = Math.floor(Math.random() * psu.length);
    const part = psu[randomIndex];
    let price = "Out of Stock";

    if (part.price) {
        price = `$${part.price}`
    }

    return (
        <section className="psu-section">
            <div>
                {part.name}
            </div>
            <div>
                Price: {price}
            </div>
            <div>
                Modular: {part.modular ? part.modular : "None"}
            </div>
            <div>
                Efficiency: {part.efficiency ? part.efficiency.charAt(0).toUpperCase() + part.efficiency.substring(1).toLowerCase() : "Not Certified"}
            </div>
            <div>
                Type: {part.type}
            </div>
            <div>
                Wattage: {part.wattage}W
            </div>
        </section>
    )
}

export default PSUGenerator;