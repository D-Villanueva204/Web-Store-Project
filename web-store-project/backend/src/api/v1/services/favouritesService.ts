import { mockFavourites, mockParts } from "../../../../../shared/data/mockFavouritesData"
import { Favourite, Part } from "@prisma/client"

export const fetchAllFavourites = async() => {
    return mockFavourites
}

export const createFavourite = async(favouriteData: {
    partId: string
}) => {
    const foundPart = mockParts.find((f => f.id === favouriteData.partId))
    if(!foundPart)
        throw new Error(`${favouriteData.partId} not found.`)

    const newPart = {
        id: crypto.randomUUID(),
        partId: favouriteData.partId,
        part: foundPart
    }

    mockFavourites.push(newPart)

    return newPart
}

export const deleteFavourite = async(id: string) => {
    const foundFavourite = mockFavourites.findIndex((f => f.id === id))

    if(foundFavourite === -1)
        throw new Error(`${id} not found`)
    const deleteFavourite = mockFavourites[foundFavourite]

    mockFavourites.splice(foundFavourite, 1)

    return deleteFavourite
}