import express, { Router } from "express";
import * as productController from "../controllers/productController";

const router: Router = express.Router();

router.get("/products", productController.getAllParts);

router.get("/products/search", productController.searchParts);

router.get("/products/case", productController.getAllCases);
router.get("/products/case/:id", productController.getCaseByID);

router.get("/products/cooler", productController.getAllCoolers);
router.get("/products/cooler/:id", productController.getCoolerByID);

router.get("/products/cpu", productController.getAllCPUs);
router.get("/products/cpu/:id", productController.getCPUByID);

router.get("/products/gpu", productController.getAllGPUs);
router.get("/products/gpu/:id", productController.getGPUByID);

router.get("/products/mobo", productController.getAllMOBOs);
router.get("/products/mobo/:id", productController.getMOBOByID);

router.get("/products/os", productController.getAllOSs);
router.get("/products/os/:id", productController.getOSByID);

router.get("/products/psu", productController.getAllPSUs);
router.get("/products/psu/:id", productController.getPSUByID);

router.get("/products/ram", productController.getAllRAMs);
router.get("/products/ram/:id", productController.getRAMByID);

router.get("/products/storage", productController.getAllStorages);
router.get("/products/storage/:id", productController.getStorageByID);

router.put("/products/:id/stock", productController.updateStock);

export default router;