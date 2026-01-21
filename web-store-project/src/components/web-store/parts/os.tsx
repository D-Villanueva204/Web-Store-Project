import os from './json/os.json'

function OSSelector() {

    const randomIndex = Math.floor(Math.random() * os.length);
    const part = os[randomIndex];
    let price = "Out of Stock";
    if (part.price) {
        price = `$${part.price}`
    }

    return (
        <section className="os-section">
            <div>
                {part.name}
            </div>
            <div>
                Price: {price}
            </div>
        </section>
    )
}

export default OSSelector;