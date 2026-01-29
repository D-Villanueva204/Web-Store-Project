import ram from '../json/ram.json'

function RAMGenerator() {
    const randomIndex = Math.floor(Math.random() * ram.length);
    const part = ram[randomIndex];
    let price = "Out of Stock";
    if (part.price) {
        price = `$${part.price}`
    }
    return (
        <section className="ram-section">
            <div>
                {part.name}
            </div>
            <div>
                Price: {price}
            </div>
            <div>
                Capacity: {part.capacity}
            </div>
            <div>
                Speed: {part.speed}
            </div>
        </section>
    )
}

export default RAMGenerator;