import { useEffect, useState } from "react";
import * as FavouriteService from "../services/favouritesService";
import type { Favourites } from "../../../shared/types/favouritesType";
import { useAuth } from "@clerk/clerk-react";

export function useFavourites() {
    const [favourites, setFavourites] = useState<Favourites[]>([]);
    const [error, setError] = useState<string>("");
    const { userId, getToken, isSignedIn } = useAuth();

    async function refreshFavourites() {
        if (!isSignedIn || !userId) return;
        const sessionToken = await getToken();
        const data = await FavouriteService.getFavourites(sessionToken)
        setFavourites(data)
    }

    useEffect(() => {
        refreshFavourites();
    }, [isSignedIn, userId]);

    async function handleAddFavourite(partId: string) {
        try {
            const sessionToken = await getToken();
            await FavouriteService.createFavourite(partId, sessionToken)
            await refreshFavourites()
        } catch (errorObject) {
            setError(`${errorObject}`)
        }
    }

    async function handleDeleteFavourite(id: string) {
        try {
            const sessionToken = await getToken();
            await FavouriteService.deleteFavourite(id, sessionToken)
            await refreshFavourites()
        } catch (errorObject) {
            setError(`${errorObject}`)
        }
    }

    return { favourites, error, handleAddFavourite, handleDeleteFavourite}
}