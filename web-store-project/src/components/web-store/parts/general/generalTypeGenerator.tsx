import PartTypes from "./PartTypes";

function GeneralTypeGenerator({ partType }: { partType: typeof PartTypes[keyof typeof PartTypes]; }) {
    const randomIndex = Math.floor(Math.random() * partType.length);
    const part = partType[randomIndex];

    return (
        <section className="random-part-section">
            <h3>
                {part.name}
            </h3>
            <p>
                Price: ${part.price}
            </p>
        </section>
    )
};

export default GeneralTypeGenerator;