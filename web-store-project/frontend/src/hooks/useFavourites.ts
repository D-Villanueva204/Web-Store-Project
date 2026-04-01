import { useEffect, useState } from "react";
import * as FavouriteService from "../services/favouritesService";
import type { Favourites } from "../../../shared/types/favouritesType";

export function useFavourites() {
    const [favourites, setFavourites] = useState<Favourites[]>([]);
    const [error, setError] = useState<string>("");

    async function refreshFavourites() {
        const data = await FavouriteService.getFavourites()
        setFavourites(data)
    }

    useEffect(() => {
        refreshFavourites();
    }, []);

    async function handleAddFavourite(partId: string) {
        try {
            await FavouriteService.createFavourite(partId)
            await refreshFavourites()
        } catch (errorObject) {
            setError(`${errorObject}`)
        }
    }

    async function handleDeleteFavourite(id: string) {
        try {
            await FavouriteService.deleteFavourite(id)
            await refreshFavourites()
        } catch (errorObject) {
            setError(`${errorObject}`)
        }
    }

    return { favourites, error, handleAddFavourite, handleDeleteFavourite}
}