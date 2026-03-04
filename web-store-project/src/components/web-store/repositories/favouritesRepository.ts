import type { Favourites } from "../types/favouritesType";
import { pcParts } from "../apis/favouritesData";

export function getFavourites(): Favourites[] {
    return pcParts;
}

export function getFavouriteById(id: number): Favourites {
    const foundFavourite = pcParts.find(part => part.id === id);

    if (!foundFavourite) {
        throw new Error(`Favourite with id ${id} not found.`);
    }
    return foundFavourite;
}

export function createFavourites(id: number, name: string, price: number, stock: number, favourited: boolean) {
    const foundFavourite = pcParts.find(part => part.id === id);

    if (!foundFavourite) {
        pcParts.push({ id, name, price, stock, favourited });
    } else {
        throw new Error(`Favourite with id ${id} already exists.`);
    }
} 

export function deleteFavourites(id: number) {
    const foundFavourite = pcParts.find(part => part.id === id);

    if (!foundFavourite) {
        throw new Error(`Favourite with id ${id} does not exist.`);
    } else {
        foundFavourite.favourited = false;
    }

}