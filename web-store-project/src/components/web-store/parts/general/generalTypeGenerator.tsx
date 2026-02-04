import BuyButton from "../../buyButton";
import PartTypes from "./PartTypes";

function GeneralTypeGenerator({ partType, addItemToCart }: { partType: typeof PartTypes[keyof typeof PartTypes], addItemToCart: (item: Part) => void }) {
    if (partType) {
        let partName = "Not Found";
        let price = "0.00";
        let stock = 0.00;
        const randomIndex = Math.floor(Math.random() * partType.data.length);
        const retrievedPart: Part = partType.data[randomIndex];
        if (retrievedPart) {
            partName = retrievedPart.name;
            price = retrievedPart.price;
            stock = retrievedPart.stock;
            
        }
        return (
            <section className="random-part-section">
                <h3>
                    {partName}
                </h3>
                <p>
                    Price: ${price}
                </p>
                <p>In stock: {stock}</p>
                <BuyButton addItemToCart={addItemToCart} price={price} productName={partName} />
            </section>
        )
    }
};

export default GeneralTypeGenerator;