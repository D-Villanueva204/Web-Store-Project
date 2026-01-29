import PartTypes from "./PartTypes";

function GeneralSelector({ name, partType }: { name: string; partType: typeof PartTypes[keyof typeof PartTypes]; }) {
    let retrievedPart = null;
    let partName = "Not Found";
    let price = "0.00";
    for (const part of partType) {
        if (part.name === name) {
            retrievedPart = part;
            break;
        }
    };

    if (retrievedPart){
        partName = retrievedPart.name;
        price = retrievedPart.price;
    }

    return (
        <section className="part-section">
            <div>
                {partName}
            </div>
            <div>
                Price: ${price}
            </div>
        </section>
    )
}

export default GeneralSelector;