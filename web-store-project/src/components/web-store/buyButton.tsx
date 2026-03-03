import type { Part } from "./repositories/PartTypes";
import { useCart } from "./hooks/useCart";

function BuyButton({ part }: { part: Part | null }) {
    const { addItemsToCart } = useCart();
    function BuyItem() {
        if (part) {
            addItemsToCart(part);
        }
    }

    return (
        <div>
            <button type="button" onClick={BuyItem}>Add to Cart</button>
        </div>)
};


export default BuyButton;