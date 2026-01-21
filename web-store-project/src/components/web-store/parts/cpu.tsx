import cpus from '../../../../json/cpu.json'

function CPUSelector() {

    const randomIndex = Math.floor(Math.random() * cpus.length);
    const part = cpus[randomIndex];
    let price = "Out of Stock";
    if (part.price) {
        price = `$${part.price}`
    }
    return (
        <section className="cpu-section">
            <div>
                {part.name}
            </div>
            <div>
                Price: {price}
            </div>
            <div>
                MicroArchitecture: {part.microarchitecture}
            </div>
            <div>
                Core Count: {part.core_count}
            </div>
                        <div>
                Core Count: {part.core_count}
            </div>
                        <div>
                Core Clock: {part.core_clock}
            </div>
        </section>
    )
}

export default CPUSelector;