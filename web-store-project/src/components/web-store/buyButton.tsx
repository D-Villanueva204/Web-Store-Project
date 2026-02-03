function BuyButton({ addItemToCart, productName }: { addItemToCart: (item: string) => void, productName: string }) {
    function BuyItem(e: React.FormEvent) {
        addItemToCart(productName);
    }
    
    return (
        <div>
            <form onSubmit={BuyItem}>
                <button type="button">Buy Now</button>
            </form>
        </div>)
};


export default BuyButton;