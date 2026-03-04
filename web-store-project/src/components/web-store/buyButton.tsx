import type { Part } from "./repositories/PartTypes";

/**
 * Dominique Villanueva:
 * Originally, we had to pass down the price along with the productName into BuyButton.
 * Here, we can add some quick validation to check if null, and pass on the part directly
 * instead of creating the part ourselves.
 * 
 */
function BuyButton({ part, addToCart }: { part: Part | null, addToCart: (item: Part) => void }) {
    function BuyItem() {
        if (part) {
            addToCart(part);
        }
    }

    return (
        <div>
            <button type="button" onClick={BuyItem}>Add to Cart</button>
        </div>)
};


export default BuyButton;