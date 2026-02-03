import BuyButton from "../../buyButton";
import PartTypes from "./PartTypes";

function GeneralTypeGenerator({ partType }: { partType: typeof PartTypes[keyof typeof PartTypes]; }) {
    if (partType) {
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
                <p>In stock: {part.stock}</p>
                <BuyButton />
            </section>

        )
    }
};

export default GeneralTypeGenerator;