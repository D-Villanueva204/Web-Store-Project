import type {Part} from "./parts/general/PartTypes";

function BuyButton({ addItemToCart, productName, price }: { addItemToCart: (item: Part) => void, productName: string, price: number }) {
    const newPart: Part = {
        name: productName,
        price: price,
        stock: 0
    };
    
    function BuyItem() {
        addItemToCart(newPart);
    }

    return (
        <div>
            <button type="button" onClick={BuyItem}>Add to Cart</button>
        </div>)
};


export default BuyButton;