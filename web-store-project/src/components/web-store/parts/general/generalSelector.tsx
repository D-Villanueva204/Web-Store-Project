import BuyButton from "../../buyButton";
import { getByName } from "../../services/productService";

function GeneralSelector({ name, partType }: { name: string, partType: string }) {
    let partName = "Not Found";
    let price = 0;
    let stock = 0;

    const retrievedPart = getByName(name, partType);

    if (retrievedPart) {
       partName = getByName(name, partType)!.name;
       price = getByName(name, partType)!.price;
       stock = getByName(name, partType)!.stock;
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
            <BuyButton part={retrievedPart} />
        </section>
    )
}
export default GeneralSelector;