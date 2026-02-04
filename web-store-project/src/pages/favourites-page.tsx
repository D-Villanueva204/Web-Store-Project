interface FavouritesPageProps {
    favourites: string[];
    removeFavourite: (index: number) => void;
}

function FavouritesPage({ favourites, removeFavourite }: FavouritesPageProps) {
    return (
        <div>
            <h2>My Favourites</h2>


        {favourites.length === 0  && <p>No favourite items added yet.</p>}
            <ul>
                {favourites.map((item, index) => (
                    <li key={index}>
                        {favourites}
                        <button onClick={() => removeFavourite(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FavouritesPage;