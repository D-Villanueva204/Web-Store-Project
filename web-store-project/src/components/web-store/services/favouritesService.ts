import * as FavouritesRepo from "../repositories/favouritesRepository";

export function toggleFavourite(id: number) {
    const foundFavourite = FavouritesRepo.getFavouriteById(id);

    if (foundFavourite.favourited) {
        FavouritesRepo.deleteFavourites(id);
    } else {
        FavouritesRepo.createFavourites(
            foundFavourite.id, 
            foundFavourite.name, 
            foundFavourite.price, 
            foundFavourite.stock, 
            true
        );
    }
}

export function getFavourites() {
    return FavouritesRepo.getFavourites();
}