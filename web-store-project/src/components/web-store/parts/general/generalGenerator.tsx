import PartTypes from "./PartTypes";

function GeneralGenerator() {
    const partTypes = [
        PartTypes.GPU, 
        PartTypes.COOLER, 
        PartTypes.CPU, 
        PartTypes.MOBO, 
        PartTypes.PSU, 
        PartTypes.RAM, 
        PartTypes.STORAGE
    ];
    const randomPartType = partTypes[Math.floor(Math.random() * partTypes.length)];
    const chosenPartType = Object.keys(PartTypes).find(key => PartTypes[key] === randomPartType);

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
            <div> Type: {chosenPartType}</div>
        </section>
    )
}

export default GeneralGenerator;