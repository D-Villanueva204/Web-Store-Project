import * as FavouritesRepo from "../repositories/favouritesRepository";
import { getByID } from "./productService";


export function toggleFavourite(id: string) {
    const foundFavourite = FavouritesRepo.getFavouriteById(id);
    const part = getByID(id);

    if (foundFavourite.favourited) {
        FavouritesRepo.deleteFavourites(id);
    } else {
        FavouritesRepo.createFavourites(
            part!.id, 
            part!.name, 
            part!.price, 
            part!.stock, 
            true
        );
    }
}

export function getFavourites() {
    return FavouritesRepo.getFavourites();
}