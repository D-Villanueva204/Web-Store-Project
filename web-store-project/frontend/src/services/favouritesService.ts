import * as FavouritesRepo from "../apis/favouritesRepository";

export async function getFavourites() {
    return FavouritesRepo.getFavourites()
}

export async function createFavourite(partId:string) {
    return FavouritesRepo.addFavourites(partId)
}

export async function deleteFavourite(id: string) {
    return FavouritesRepo.deleteFavourites(id)
}