import { useFavourites } from "../hooks/useFavourites";

function AddFavouriteButton({ id }: { id: number }) {
    const { handleToggleFavourite, error, favourites } = useFavourites();
    const isFavourited = favourites.find(fav => fav.id === id)?.favourited;

    return (
        <>
        {!isFavourited && 
        <button type="button" onClick={() => handleToggleFavourite(id)}>Add to Favourites</button>}

        {isFavourited &&
            <button type="button" onClick={() => handleToggleFavourite(id)}>Remove from Favourites</button>}
        {error &&    
            <p className="error">{error}</p>}
        </>
    )
}

export default AddFavouriteButton;