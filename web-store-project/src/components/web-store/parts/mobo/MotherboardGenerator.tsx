import mobo from '../json/mobo.json'

function MotherboardGenerator() {

    const randomIndex = Math.floor(Math.random() * mobo.length);
    const part = mobo[randomIndex];
    let price = "Out of Stock";
    if (part.price) {
        price = `$${part.price}`
    }

    return (
        <section className="mobo-section">
            <div>
                {part.name}
            </div>
            <div>
                {part.form_factor}
            </div>
            <div>
                {part.socket}
            </div>
            <div>
                Price: {price}
            </div>
        </section>
    )
}

export default MotherboardGenerator;