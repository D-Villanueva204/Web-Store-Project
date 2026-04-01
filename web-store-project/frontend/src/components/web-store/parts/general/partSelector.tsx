import { useState, useEffect } from "react";
import BuyButton from "../../buyButton/buyButton";
import type { Part } from "../../../../../../shared/types/PartTypes";
import { getByName } from "../../../../services/productService";

/**
 * Dominique Villanueva:
 * This function is now refactored to use the new getByName service, and the new Part type.
 * 
 */

function GeneralSelector({ name, partType, addItemToCart }: { name: string, partType: string, addItemToCart: (item: Part) => void }) {
    const [part, setPart] = useState<Part | null>(null);

    useEffect(() => {
        getByName(name, partType).then(setPart);
    }, [name, partType]);

    if (!part) return <p>Loading...</p>;

    return (
        <section className="part-section">
            <h3>{part.name}</h3>
            <p>Price: ${part.price}</p>
            <p>Stock: {part.stock}</p>
            <BuyButton part={part} addToCart={addItemToCart} />
        </section>
    );
}
export default GeneralSelector;