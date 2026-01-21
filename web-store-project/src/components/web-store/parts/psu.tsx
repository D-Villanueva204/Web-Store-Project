import psu from './json/psu.json'

function PSUSelector() {

    const randomIndex = Math.floor(Math.random() * psu.length);
    const part = psu[randomIndex];
    let modular = "None"
    let price = "Out of Stock";
    let efficiency = "Not Certified";
    if (part.price) {
        price = `$${part.price}`
    }
    if (part.modular) {
        modular = part.modular
    }
    if (part.efficiency){
        efficiency = part.efficiency
        efficiency = efficiency.charAt(0).toUpperCase() + efficiency.substring(1).toLowerCase()
    }
    if (part.efficiency == "plus"){
        efficiency = "80 Plus"
    }

    console.log(part);

    return (
        <section className="psu-section">
            <div>
                {part.name}
            </div>
            <div>
                Price: {price}
            </div>
            <div>
                Modular: {modular}
            </div>
            <div>
                Efficiency: {efficiency}
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

export default PSUSelector;