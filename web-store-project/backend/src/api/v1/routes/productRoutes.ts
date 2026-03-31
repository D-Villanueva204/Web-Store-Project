import express, { Router } from "express";
import * as productController from "../controllers/productController";

const router: Router = express.Router();

router.get("/products", productController.getAllParts);

router.post("/products/case",
    productController.createCase);

router.post("/products/cooler",
    productController.createCooler);

router.post("/products/cpu",
    productController.createCPU);

router.post("/products/gpu",
    productController.createGPU);

router.post("/products/mobo",
    productController.createMOBO);

router.post("/products/os",
    productController.createOS);

router.post("/products/psu",
    productController.createPSU);

router.post("/products/ram",
    productController.createRAM);

router.post("/products/storage",
    productController.createStorage);

export default router;