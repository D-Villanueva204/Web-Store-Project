import BuyButton from "../../buyButton";
import PartTypes from "./PartTypes";
import AddFavouriteButton from "../../favourite-button/favourite-button";
import "./GeneralTypeGenerator.css"

function GeneralTypeGenerator({ partType, addItemToCart, addFavourite, favourite }: { partType: typeof PartTypes[keyof typeof PartTypes], addItemToCart: (item: Part) => void, addFavourite: (item: Part) => void, favourite: boolean }) {
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
                <BuyButton addItemToCart={addItemToCart} price={price} productName={partName} />
                <AddFavouriteButton addFavourite={addFavourite} price={price}productName={partName} />
            </section>
        )}
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
                <BuyButton addItemToCart={addItemToCart} price={price} productName={partName} />
            </section>
        )}
    }
};

export default GeneralTypeGenerator;