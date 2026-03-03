import type { Part } from "./repositories/PartTypes";
import { fetchAllItems } from "./repositories/sidebarRepository";
function BuyButton({ part, addToCart }: { part: Part | null, addToCart: (item: Part) => void }) {
    const cartSize = fetchAllItems().length;
    function BuyItem() {
        if (part && cartSize <= 6) {
            addToCart(part);
        }
    }

    return (
        <div>
            <button type="button" onClick={BuyItem}>Add to Cart</button>
        </div>)
};


export default BuyButton;