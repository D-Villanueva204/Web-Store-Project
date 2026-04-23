import { Request, Response, NextFunction } from "express";
import * as favouriteService from "../services/favouritesService"
import { successResponse } from "../models/responseModel";

export const getAllFavourites = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const favourites = await favouriteService.fetchAllFavourites(req.userId);
        res.status(200).json(
            successResponse(favourites, "Favourites retrieved successfully")
        );
    } catch (error) {
        next(error)
    }
};

export const createFavourite = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newFavourite = await favouriteService.createFavourite({ ...req.body, userId: req.userId });
        res.status(201).json(
            successResponse(newFavourite, "Favourite created successfully")
        );
    } catch (error) {
        next(error)
    }
};

export const deleteFavourite = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id  = req.params.id.toString()
        await favouriteService.deleteFavourite(id)
        res.status(200).json(
            successResponse(null, "Favourite deleted successfully")
        )
    } catch(error) {
        next(error)
    }
};