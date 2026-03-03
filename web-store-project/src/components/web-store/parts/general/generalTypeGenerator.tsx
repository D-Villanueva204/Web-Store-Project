import BuyButton from "../../buyButton";
import PartTypes from "../../repositories/PartTypes";
import { getByType } from "../../services/productService";
import AddFavouriteButton from "../../favourite-button/favourite-button";
import type { Part } from "../../repositories/PartTypes";
import "./generalTypeGenerator.css"

function GeneralTypeGenerator({ partType, addFavourite, favourite, addItemToCart }: { partType: typeof PartTypes[keyof typeof PartTypes], addFavourite: (item: Part) => void, favourite: boolean, addItemToCart: (item: Part) => void }) {
    const partData = getByType(partType);
    let retrievedPart = null;
    if (partType && partData) {
        let partName = "Not Found";
        let price = 0.00;
        let stock = 0;
        const randomIndex = Math.floor(Math.random() * partData.length);
        retrievedPart = partData[randomIndex];
        if (retrievedPart) {
            partName = retrievedPart.name;
            price = retrievedPart.price;
            stock = retrievedPart.stock;
        }

        if (favourite) {
            return (
                <section className="random-part-section">
                    <h3>
                        {partName}
                    </h3>
                    <p>
                        Price: ${price}
                    </p>
                    <p>In stock: {stock}</p>
                    <BuyButton part={retrievedPart} addToCart={addItemToCart} />
                    <AddFavouriteButton addFavourite={addFavourite} price={price} productName={partName} />
                </section>
            )
        }
        if (!favourite) {
            return (
                <section className="random-part-section">
                    <h3>
                        {partName}
                    </h3>
                    <p>
                        Price: ${price}
                    </p>
                    <p>In stock: {stock}</p>
                    <BuyButton part={retrievedPart} addToCart={addItemToCart} />
                </section>
            )
        }
    }
};

export default GeneralTypeGenerator;