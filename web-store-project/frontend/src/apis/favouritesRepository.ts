import type { Favourites } from "../../../shared/types/favouritesType";

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`
const FAVOURITE_ENDPOINT = '/favourites'

export async function getFavourites(sessionToken?: string | null): Promise<Favourites[]> {
    const response = await fetch(`${BASE_URL}${FAVOURITE_ENDPOINT}`,
        {
            headers: {
                Authorization: `Bearer ${sessionToken}`
            }
        }
    );

    if(!response.ok) {
        throw new Error("Failed to fetch favourites")
    }
    
    const json = await response.json()
    return json.data
}

export async function addFavourites(partId: string, sessionToken: string | null) {
    const updateResponse: Response = await fetch(
        `${BASE_URL}${FAVOURITE_ENDPOINT}`,
        {
            method: "POST",
            body: JSON.stringify({partId}),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionToken}`
            }
        }
    );

    const json = await updateResponse.json()
    return json.data
}

export async function deleteFavourites(id: string, sessionToken: string | null) {
    const deleteResponse: Response = await fetch(
        `${BASE_URL}${FAVOURITE_ENDPOINT}/${id}`,
        {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${sessionToken}`
            }
        }
    );

    const json = await deleteResponse.json()
    return json.data
}