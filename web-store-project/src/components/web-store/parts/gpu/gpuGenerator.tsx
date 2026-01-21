import gpus from '../../../../../json/gpu.json'

function GPUGenerator() {

    const randomIndex = Math.floor(Math.random() * gpus.length);
    const part = gpus[randomIndex];
    let price = "Out of Stock";
    if (part.price) {
        price = `$${part.price}`
    }

    console.log(part);

    return (
        <section className="gpu-section">
            <div>
                {part.name} {part.chipset}
            </div>
            <div>
                Price: {price}
            </div>
        </section>
    )
}

export default GPUGenerator;