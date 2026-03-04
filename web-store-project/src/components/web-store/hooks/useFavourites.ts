import { useEffect, useState } from "react";
import * as FavouriteService from "../services/favouritesService";
import type { Favourites } from "../types/favouritesType";

export function useFavourites() {
    const [favourites, setFavourites] = useState<Favourites[]>([]);
    const [error, setError] = useState<string>("");

    async function fetchFavourites() {
        try {
            const favourites = await FavouriteService.getFavourites();
            setFavourites(favourites);
        } catch (errorObject) {
            setError(`${errorObject}`);
        }
    }
    useEffect(() => {
        fetchFavourites();
    }, []);

    async function handleToggleFavourite(id: string) {
        try {
            FavouriteService.toggleFavourite(id);
            await fetchFavourites();
        } catch (errorObject) {
            setError(`${errorObject}`);
        }
    } 
    return { favourites, error, handleToggleFavourite };
}
