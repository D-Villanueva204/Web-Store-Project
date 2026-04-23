import { useState, useEffect } from "react";
import BuyButton from "../../buyButton/buyButton";
import PartTypes from "../../../../../../shared/types/PartTypes";
import { getByType } from "../../../../services/productService";
import AddFavouriteButton from "../../favourite-button/favourite-button";
import type { Part } from "../../../../../../shared/types/PartTypes";
import "./generalTypeGenerator.css"
import { useAuth } from "@clerk/clerk-react";

/**
 * This component now uses the getByType service, and the new BuyButton,
 * and the new Part and PartType types.
 * 
 */

function GeneralTypeGenerator({ partType, handleAddFavourite, favourite, handleDeleteFavourite, addItemToCart }: 
    { partType: typeof PartTypes[keyof typeof PartTypes], 
    handleAddFavourite: (id: string) => void, 
    handleDeleteFavourite?: (id: string) => void,
    favourite: boolean, 
    addItemToCart: (item: Part) => void }) {
    
    /**
     * Originally, partType would have a link directly to the data, we can just get the arrays ourselves
     * with a getByType service. Because getByType returns null if the type is incorrect, we can simply
     * check for it.
     * 
     */
    const [part, setPart] = useState<Part | null>(null);
    const [isFavourited, setIsFavourited] = useState(false);
    const { isSignedIn } = useAuth();

    useEffect(() => {
        getByType(partType).then(partData => {
            if (!partData || partData.length === 0) return;
            const randomIndex = Math.floor(Math.random() * partData.length);
            const randomPart = partData[randomIndex];
            setPart(randomPart);

            if (favourite && randomPart) {
                setIsFavourited(false)
            }
        });
    }, [partType, favourite]);

    if (!part) return <p>Loading...</p>;

    return (
        <section className="random-part-section">
            <h3>{part.name}</h3>
            <p>Price: ${part.price}</p>
            <p>In stock: {part.stock}</p>
            <BuyButton part={part} addToCart={addItemToCart} />
            {favourite && isSignedIn &&(
                <AddFavouriteButton id={part.id} handleAdd={handleAddFavourite} handleDelete={handleDeleteFavourite} isFavourited={isFavourited} />
            )}
        </section>
    );
};

export default GeneralTypeGenerator;