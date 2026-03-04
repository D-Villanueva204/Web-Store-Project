function AddFavouriteButton({ id, handleToggleFavourite, isFavourited }: { 
    id: string,
    handleToggleFavourite: (id: string) => void,
    isFavourited: boolean
}) {
    return (
        <>
        {!isFavourited && 
            <button type="button" onClick={() => handleToggleFavourite(id)}>Add to Favourites</button>}

        {isFavourited &&
            <button type="button" onClick={() => handleToggleFavourite(id)}>Remove from Favourites</button>}
        </>
    )
}

export default AddFavouriteButton;