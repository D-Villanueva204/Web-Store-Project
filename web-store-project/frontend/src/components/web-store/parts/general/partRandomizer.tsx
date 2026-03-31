import BuyButton from "../../buyButton/buyButton";
import PartTypes from "../../../../../../shared/types/PartTypes";
import { getByType } from "../../../../services/productService";
import AddFavouriteButton from "../../favourite-button/favourite-button";
import type { Part } from "../../../../../../shared/types/PartTypes";
import "./generalTypeGenerator.css"
import { getFavouriteById } from "../../../../apis/favouritesRepository";

/**
 * Dominique Villanueva:
 * This component now uses the getByType service, and the new BuyButton,
 * and the new Part and PartType types.
 * 
 */

async function GeneralTypeGenerator({ partType, addFavourite, favourite, addItemToCart }: { partType: typeof PartTypes[keyof typeof PartTypes], addFavourite: (id: string) => void, favourite: boolean, addItemToCart: (item: Part) => void }) {
    
    /**
     * Originally, partType would have a link directly to the data, we can just get the arrays ourselves
     * with a getByType service. Because getByType returns null if the type is incorrect, we can simply
     * check for it.
     * 
     */
    const partData = await getByType(partType);
    let retrievedPart = null;
    if (partData) {
        let partName = "Not Found";
        let price = 0.00;
        let stock = 0;
        // And because these new Part arrays can return null, we can use this for quick validation.
        const randomIndex = Math.floor(Math.random() * partData.length);
        retrievedPart = partData[randomIndex];
        if (retrievedPart) {
            partName = retrievedPart.name;
            price = retrievedPart.price;
            stock = retrievedPart.stock;
        }

        if (favourite) {
            let retrievedFavourite = false
            try {
                getFavouriteById(retrievedPart.id);
                retrievedFavourite = true;
            } catch (error) {
                retrievedFavourite = false;
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
                    <BuyButton part={retrievedPart} addToCart={addItemToCart} />
                    <AddFavouriteButton id={retrievedPart.id} handleToggleFavourite={addFavourite} isFavourited={retrievedFavourite} />
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