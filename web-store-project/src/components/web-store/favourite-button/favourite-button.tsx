import type {Part} from "../repositories/PartTypes";

function AddFavouriteButton({ addFavourite, productName, price }: { addFavourite: (item: Part) => void, productName: string, price: number }) {
    const handleAddFavourite = () => {
        const newFavourite: Part = {
            name: productName,
            price: price,
            stock: 0
        };
        addFavourite(newFavourite);
    };

    return (
        <div>
            <button type="button" onClick={handleAddFavourite}>Add to Favourites</button>
        </div>
    )
}

export default AddFavouriteButton;