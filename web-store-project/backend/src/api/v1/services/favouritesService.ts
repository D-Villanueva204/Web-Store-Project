import { Favourite } from "@prisma/client"
import { prisma } from "../../../../lib/prisma"

export const fetchAllFavourites = async(): Promise<Favourite[]> => {
    return prisma.favourite.findMany({
        include: {part: true}
    })
}

export const createFavourite = async(favouriteData: {
    partId: string
}): Promise<Favourite> => {
    const newFavourite: Favourite = await prisma.favourite.create({
        data: {
            partId: favouriteData.partId
        }, 
        include: { part: true}
    });

    return newFavourite;
}

export const deleteFavourite = async(id: string): Promise<void> => {
    await prisma.favourite.delete({
        where: {
            id: id
        }
    })
}