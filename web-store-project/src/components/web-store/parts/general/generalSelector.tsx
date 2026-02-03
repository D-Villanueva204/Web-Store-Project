import PartTypes from "./PartTypes";
import BuyButton from "../../buyButton";

function GeneralSelector({ name, partType, addItemToCart }: { name: string; partType: typeof PartTypes[keyof typeof PartTypes], addItemToCart: (item: string) => void }) {
    let retrievedPart = null;
    let partName = "Not Found";
    let price = "0.00";
    let stock = 0.00;
    for (const part of partType.data) {
        if (part.name === name) {
            retrievedPart = part;
            partName = retrievedPart.name;
            price = retrievedPart.price;
            stock = retrievedPart.stock;
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
            <p>Stock: {stock}</p>
                <BuyButton addItemToCart={addItemToCart} price={price} productName={partName} />
        </section>
    )
}

export default GeneralSelector;