function BuyButton({ addItemToCart, productName }: { addItemToCart: (item: string) => void, productName: string }) {
    function BuyItem() {
        addItemToCart(productName);
    }

    return (
        <div>
            <button type="button" onClick={BuyItem}>Buy Now</button>
        </div>)
};


export default BuyButton;