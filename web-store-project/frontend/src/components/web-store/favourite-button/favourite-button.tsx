function AddFavouriteButton({ id, handleAdd, handleDelete, isFavourited }: { 
    id: string,
    handleAdd: (id: string) => void,
    handleDelete?: (id: string) => void,
    isFavourited: boolean
}) {
    return (
        <>
        {!isFavourited && 
            <button type="button" onClick={() => handleAdd(id)}>Add to Favourites</button>}

        {isFavourited && handleDelete &&
            <button type="button" onClick={() => handleDelete(id)}>Remove from Favourites</button>}
        </>
    )
}

export default AddFavouriteButton;