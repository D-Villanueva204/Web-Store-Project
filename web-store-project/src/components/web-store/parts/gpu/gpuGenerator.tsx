import gpus from '../json/gpu.json'

function GPUGenerator() {
    const randomIndex = Math.floor(Math.random() * gpus.length);
    const part = gpus[randomIndex];

    return (
        <section className="gpu-section">
            <div>
                {part.name} {part.chipset}
            </div>
            <div>
                Price: ${part.price}
            </div>
        </section>
    )
}

export default GPUGenerator;