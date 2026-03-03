import BuyButton from "../../buyButton";
import type { Part } from "../../repositories/PartTypes";
import { getByName } from "../../services/productService";

/**
 * Dominique Villanueva:
 * This function is now refactored to use the new getByName service, and the new Part type.
 * 
 */

function GeneralSelector({ name, partType, addItemToCart }: { name: string, partType: string, addItemToCart: (item: Part) => void }) {
    let partName = "Not Found";
    let price = 0;
    let stock = 0;

    // Instead of retrieving the data ourselves, we can just extract it using the service, and pass on the object
    // directly from the repository than to construct the product later.
    const retrievedPart = getByName(name, partType);

    if (retrievedPart) {
       partName = retrievedPart.name;
       price = retrievedPart.price;
       stock = retrievedPart.stock;
    }

    return (
        <section className="part-section">
            <h3>
                {partName}
            </h3>
            <p>
                Price: ${price}
            </p>
            <p>Stock: {stock} </p>
            <BuyButton part={retrievedPart} addToCart={addItemToCart}/>
        </section>
    )
}
export default GeneralSelector;