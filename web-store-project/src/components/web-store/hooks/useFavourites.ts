import { useEffect, useState } from "react";
import * as FavouriteService from "../services/favouritesService";
import type { Favourites } from "../types/favouritesType";
import { getFavourites } from "../repositories/favouritesRepository";

export function useFavourites() {
    const [favourites, setFavourites] = useState<Favourites[]>([]);
    const [error, setError] = useState<string>("");

    function refreshFavourites() {
        setFavourites([...getFavourites()]);
    }

    useEffect(() => {
        refreshFavourites();
    }, []);

    function handleToggleFavourite(id: string) {
        try {
            FavouriteService.toggleFavourite(id);
            refreshFavourites();
        } catch (errorObject) {
            setError(`${errorObject}`);
        }
    }

    return { favourites, error, handleToggleFavourite };
}