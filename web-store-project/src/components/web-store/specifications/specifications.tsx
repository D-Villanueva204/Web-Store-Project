import { pcProducts } from "../product_data/product_data";
import "./specifications.css"
function PartSpecifications () {
    const gpus = pcProducts.filter(product => product.category === "GPU");
    const cpus = pcProducts.filter(product => product.category === "CPU");
    const rams = pcProducts.filter(product => product.category === "RAM");
    const storages = pcProducts.filter(product => product.category === "Storage");
    const cases = pcProducts.filter(product => product.category === "Case");
    const motherboards = pcProducts.filter(product => product.category === "Motherboard");

    return (
        <section className="Part-specifications"> 
            <div>
                <h2>Part Specifications</h2>
            </div>
            <div className="gpu-table">
                <table>
                        <div>
                            <thead> 
                                <tr>
                                    <th>Name</th>
                                    <th>Series</th>
                                    <th>Memory</th>
                                    <th>Core Clock</th>
                                    <th>Boost Clock</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gpus.map(gpu => (
                                    <tr>
                                        <td>{gpu.name}</td>
                                        <td>{gpu.series}</td>
                                        <td>{gpu.memory}</td>
                                        <td>{gpu.coreClock}</td>
                                        <td>{gpu.boostClock}</td>
                                        <td>{gpu.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </div>
                </table>
            </div>
            <div className="cpu-table">
                <table>
                        <div>
                            <thead> 
                                <tr>
                                    <th>Name</th>
                                    <th>Series</th>
                                    <th>Core Count</th>
                                    <th>Thread Count</th>
                                    <th>Base Clock</th>
                                    <th>Boost Clock</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cpus.map(cpu => (
                                    <tr>
                                        <td>{cpu.name}</td>
                                        <td>{cpu.series}</td>
                                        <td>{cpu.coreCount}</td>
                                        <td>{cpu.threadCount}</td>
                                        <td>{cpu.baseClock}</td>
                                        <td>{cpu.boostClock}</td>
                                        <td>{cpu.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </div>
                </table>
            </div>
            <div className="ram-table">
                <table>
                        <div>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Series</th>
                                    <th>Capacity</th>
                                    <th>Speed</th>
                                    <th>CAS</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rams.map(ram => (
                                    <tr>
                                        <td>{ram.name}</td>
                                        <td>{ram.series}</td>
                                        <td>{ram.capacity}</td>
                                        <td>{ram.speed}</td>
                                        <td>{ram.cas}</td>
                                        <td>{ram.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </div>
                </table>
            </div>
            <div className="storage-table">
                <table>
                        <div>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Series</th>
                                    <th>Capacity</th>
                                    <th>Type</th>
                                    <th>Read Speed</th>
                                    <th>Write Speed</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {storages.map(storage => (
                                    <tr>
                                        <td>{storage.name}</td>
                                        <td>{storage.series}</td>
                                        <td>{storage.capacity}</td>
                                        <td>{storage.type}</td>
                                        <td>{storage.readSpeed}</td>
                                        <td>{storage.writeSpeed}</td>
                                        <td>{storage.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </div>
                </table>
            </div>
            <div className="case-table">
                <table>
                        <div>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Series</th>
                                    <th>Form Factor</th>
                                    <th>Color</th>
                                    <th>Side Panel Type</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cases.map(pcCase => (
                                    <tr>
                                        <td>{pcCase.name}</td>
                                        <td>{pcCase.series}</td>
                                        <td>{pcCase.formFactor}</td>
                                        <td>{pcCase.color}</td>
                                        <td>{pcCase.sidePanelType}</td>
                                        <td>{pcCase.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </div>
                </table>
            </div>
            <div className="motherboard-table">
                <table>
                        <div>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Series</th>
                                    <th>Chipset</th>
                                    <th>Form Factor</th>
                                    <th>Socket</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {motherboards.map(motherboard => (
                                    <tr>
                                        <td>{motherboard.name}</td>
                                        <td>{motherboard.series}</td>
                                        <td>{motherboard.chipset}</td>
                                        <td>{motherboard.formFactor}</td>
                                        <td>{motherboard.socket}</td>
                                        <td>{motherboard.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </div>
                </table>
            </div>
        </section>
    );
}

export default PartSpecifications;