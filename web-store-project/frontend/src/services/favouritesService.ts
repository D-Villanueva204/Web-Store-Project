import * as FavouritesRepo from "../apis/favouritesRepository";
import { getByID } from "./productService";

export function toggleFavourite(id: string) {
    try {
        const foundFavourite = FavouritesRepo.getFavouriteById(id);
        if (foundFavourite.favourited) {
            FavouritesRepo.toggleFavourited(id);
        } else {
            FavouritesRepo.toggleFavourited(id);
        }
    } catch {
        const part = getByID(id);
        if (part) {
            FavouritesRepo.toggleFavourited(id);
        }
    }
}

export function getFavourites() {
    return FavouritesRepo.getFavourites();
}

