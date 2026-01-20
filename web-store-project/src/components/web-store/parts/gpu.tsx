import gpus from '../../../../json/gpu.json'

function GPUSelector({ text }: { text: string }) {

    const randomIndex = Math.floor(Math.random() * gpus.length);
    const part = gpus[randomIndex];
    let price = "Out of Stock";
    if (part.price) {
        price = `$${part.price}`
    }

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

export default GPUSelector;