import coolers from '../json/cooler.json'

function CoolerGenerator() {

    const randomIndex = Math.floor(Math.random() * coolers.length);
    const part = coolers[randomIndex];
    let price = "Out of Stock";
    if (part.price) {
        price = `$${part.price}`
    }    
    return (
        <section className="cooler-section">
            <div>
                {part.name}
            </div>
            <div>
                Price: {price}
            </div>
            <div>
            </div>
        </section>
    )
}

export default CoolerGenerator;