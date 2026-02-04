import type {Part} from "./PartTypes";
import BuyButton from "../../buyButton";
import PartTypes from './PartTypes';

function GeneralSelector({ name, partType, addItemToCart }: { name: string; partType: typeof PartTypes[keyof typeof PartTypes], addItemToCart: (item: Part) => void }) {
    let retrievedPart = null;
    let partName = "Not Found";
    let price = 0;
    let stock = 0;
    
    for (const part of partType.data) {
        if (part.name.toLowerCase().trim() === name.toLowerCase().trim()) {
            retrievedPart = part;
            partName = retrievedPart.name;
            price = Number(retrievedPart.price);
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
            <p>Stock: {stock} </p>
            <BuyButton addItemToCart={addItemToCart} price={price} productName={partName} />
        </section>
    )
}
export default GeneralSelector;