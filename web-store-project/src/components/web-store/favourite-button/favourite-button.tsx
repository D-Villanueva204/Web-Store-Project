import type {Part} from "../parts/general/PartTypes";

function AddFavouriteButton({ addFavourite, productName, price }: { addFavourite: (item: Part) => void, productName: string }) {
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