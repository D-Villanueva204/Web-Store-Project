import * as FavouritesRepo from "../apis/favouritesRepository";

export async function getFavourites(token: string | null) {
    return FavouritesRepo.getFavourites(token)
}

export async function createFavourite(partId:string, sessionToken: string | null) {
    return FavouritesRepo.addFavourites(partId, sessionToken)
}

export async function deleteFavourite(id: string, sessionToken: string | null) {
    return FavouritesRepo.deleteFavourites(id, sessionToken)
}