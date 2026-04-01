import { useFavourites } from "../hooks/useFavourites";
import AddFavouriteButton from "../components/web-store/favourite-button/favourite-button";

function FavouritesPage() {
    const { favourites, error, handleAddFavourite, handleDeleteFavourite } = useFavourites();
    return (
        <div>
            <h2>My Favourites</h2>
            {error && <p className="error">{error}</p>}
            {favourites.length === 0 && <p>No favourite items added yet.</p>}
            <ul>
                {favourites.map((item) => (
                    <li key={item.id}>
                        {item.part.name} - ${item.part.price}
                        <AddFavouriteButton 
                            id={item.id} 
                            handleAdd={handleAddFavourite}
                            handleDelete={handleDeleteFavourite}
                            isFavourited={true}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FavouritesPage;