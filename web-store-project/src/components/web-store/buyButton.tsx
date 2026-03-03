import type { Part } from "./repositories/PartTypes";
import { useCart } from "./hooks/useCart";

function BuyButton({ part }: { part: Part }) {
    const { addItemsToCart } = useCart();
    function BuyItem() {
        addItemsToCart(part);
    }

    return (
        <div>
            <button type="button" onClick={BuyItem}>Add to Cart</button>
        </div>)
};


export default BuyButton;