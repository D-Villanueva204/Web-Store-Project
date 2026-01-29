import PartTypes from "./PartTypes";

function GeneralSelector({ name, partType }: { name: string; partType: typeof PartTypes[keyof typeof PartTypes]; }) {
    let retrievedPart = null;
    let partName = "Not Found";
    let price = "0.00";
    for (const part of partType) {
        if (part.name === name) {
            retrievedPart = part;
            partName = retrievedPart.name;
            price = retrievedPart.price;
            break;
        }
    };

    return (
        <section className="part-section">
            <h3>
                {partName}
            </h3>
            <p>
                Price: ${price}
            </p>
        </section>
    )
}

export default GeneralSelector;