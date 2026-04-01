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

export const getAllCases = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const cases = await productService.fetchAllCases();
        res.status(200).json(successResponse(cases, "Cases retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getCaseByID = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const part = await productService.fetchCaseByID(id);
        if (!part) {
            res.status(404).json({ error: "Case not found" });
            return;
        }
        res.status(200).json(successResponse(part, "Case retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getAllCoolers = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const coolers = await productService.fetchAllCoolers();
        res.status(200).json(successResponse(coolers, "Coolers retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getCoolerByID = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const part = await productService.fetchCoolerByID(id);
        if (!part) {
            res.status(404).json({ error: "Cooler not found" });
            return;
        }
        res.status(200).json(successResponse(part, "Cooler retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getAllCPUs = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const cpus = await productService.fetchAllCPUs();
        res.status(200).json(successResponse(cpus, "CPUs retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getCPUByID = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const part = await productService.fetchCPUByID(id);
        if (!part) {
            res.status(404).json({ error: "CPU not found" });
            return;
        }
        res.status(200).json(successResponse(part, "CPU retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getAllGPUs = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const gpus = await productService.fetchAllGPUs();
        res.status(200).json(successResponse(gpus, "GPUs retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getGPUByID = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const part = await productService.fetchGPUByID(id);
        if (!part) {
            res.status(404).json({ error: "GPU not found" });
            return;
        }
        res.status(200).json(successResponse(part, "GPU retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getAllMOBOs = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const mobos = await productService.fetchAllMOBOs();
        res.status(200).json(successResponse(mobos, "Motherboards retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getMOBOByID = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const part = await productService.fetchMOBOByID(id);
        if (!part) {
            res.status(404).json({ error: "Motherboard not found" });
            return;
        }
        res.status(200).json(successResponse(part, "Motherboard retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getAllOSs = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const oss = await productService.fetchAllOSs();
        res.status(200).json(successResponse(oss, "Operating systems retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getOSByID = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const part = await productService.fetchOSByID(id);
        if (!part) {
            res.status(404).json({ error: "Operating system not found" });
            return;
        }
        res.status(200).json(successResponse(part, "Operating system retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getAllPSUs = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const psus = await productService.fetchAllPSUs();
        res.status(200).json(successResponse(psus, "Power supplies retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getPSUByID = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const part = await productService.fetchPSUByID(id);
        if (!part) {
            res.status(404).json({ error: "Power supply not found" });
            return;
        }
        res.status(200).json(successResponse(part, "Power supply retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getAllRAMs = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const rams = await productService.fetchAllRAMs();
        res.status(200).json(successResponse(rams, "RAM modules retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getRAMByID = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const part = await productService.fetchRAMByID(id);
        if (!part) {
            res.status(404).json({ error: "RAM not found" });
            return;
        }
        res.status(200).json(successResponse(part, "RAM retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getAllStorages = async (
    _req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const storages = await productService.fetchAllStorages();
        res.status(200).json(successResponse(storages, "Storage devices retrieved successfully"));
    } catch (error) {
        next(error);
    }
};

export const getStorageByID = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const part = await productService.fetchStorageByID(id);
        if (!part) {
            res.status(404).json({ error: "Storage device not found" });
            return;
        }
        res.status(200).json(successResponse(part, "Storage device retrieved successfully"));
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
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        const updatedPart = await productService.updateStock(id, adding, amount);
        res.status(200).json(successResponse(updatedPart, "Stock updated successfully"));
    } catch (error) {
        next(error);
    }
};