import { Request, Response, NextFunction } from "express";
import * as productService from "../services/productService";
import { successResponse } from "../models/responseModel";

export const getAllParts = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const parts = await productService.fetchAllParts();
        res.status(200).json(successResponse(parts, "Parts retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getPartByID = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const part = await productService.fetchPartByID(req.params.id[0]);
        if (part) {
            res.status(200).json(successResponse(part, "Part retrieved successfully"));
        } else {
            throw new Error("Part not found");
        }
    } catch (error) {
        next(error);
    }
};

export const createCase = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newPart = await productService.createCase(req.body);
        res.status(201).json(successResponse(newPart, "Case created successfully"));
    } catch (error) {
        next(error);
    }
};

export const createCooler = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newPart = await productService.createCooler(req.body);
        res.status(201).json(successResponse(newPart, "Cooler created successfully"));
    } catch (error) {
        next(error);
    }
};

export const createCPU = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newPart = await productService.createCPU(req.body);
        res.status(201).json(successResponse(newPart, "CPU created successfully"));
    } catch (error) {
        next(error);
    }
};

export const createGPU = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newPart = await productService.createGPU(req.body);
        res.status(201).json(successResponse(newPart, "GPU created successfully"));
    } catch (error) {
        next(error);
    }
};

export const createMOBO = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newPart = await productService.createMOBO(req.body);
        res.status(201).json(successResponse(newPart, "Motherboard created successfully"));
    } catch (error) {
        next(error);
    }
};

export const createOS = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newPart = await productService.createOS(req.body);
        res.status(201).json(successResponse(newPart, "OS created successfully"));
    } catch (error) {
        next(error);
    }
};

export const createPSU = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newPart = await productService.createPSU(req.body);
        res.status(201).json(successResponse(newPart, "PSU created successfully"));
    } catch (error) {
        next(error);
    }
};

export const createRAM = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newPart = await productService.createRAM(req.body);
        res.status(201).json(successResponse(newPart, "RAM created successfully"));
    } catch (error) {
        next(error);
    }
};

export const createStorage = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const newPart = await productService.createStorage(req.body);
        res.status(201).json(successResponse(newPart, "Storage created successfully"));
    } catch (error) {
        next(error);
    }
};

export const updateStock = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { adding, amount } = req.body;
        const updatedPart = await productService.updateStock(req.params.id[0], adding, amount);
        res.status(200).json(successResponse(updatedPart, "Stock updated successfully"));
    } catch (error) {
        next(error);
    }
};