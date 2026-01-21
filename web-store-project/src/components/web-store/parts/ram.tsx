import ram from './json/ram.json'

function RamSelector() {

    const randomIndex = Math.floor(Math.random() * ram.length);
    const part = ram[randomIndex];
    let price = "Out of Stock";
    if (part.price) {
        price = `$${part.price}`
    }
    console.log(part);
    return (
        <section className="cpu-section">
            <div>
                {part.name}
            </div>
            <div>
                Price: {price}
            </div>
        </section>
    )
}

export default RamSelector;