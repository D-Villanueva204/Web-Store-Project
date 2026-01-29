import gpus from '../json/gpu.json'
import coolers from '../json/cooler.json'
import cpus from '../json/cpu.json'
import mobos from '../json/mobo.json'
import psus from '../json/psu.json'
import mems from '../json/ram.json'
import hds from '../json/storage.json'

function GeneralSelector() {
    const partTypes = [gpus, coolers, cpus, mobos, psus, mems, hds];
    const randomPartType = partTypes[Math.floor(Math.random() * partTypes.length)];
    const randomIndex = Math.floor(Math.random() * randomPartType.length);
    const part = randomPartType[randomIndex];

    return (
        <section className="part-section">
            <div>
                {part.name}
            </div>
            <div>
                Price: ${part.price}
            </div>
        </section>
    )
}

export default GeneralSelector;