import express, { Router } from "express";
import * as productController from "../controllers/productController";

const router: Router = express.Router();

router.get("/products", productController.getAllParts);

router.get("/products/case", productController.getAllCases);
router.get("/products/case/:id", productController.getCaseByID);
router.post("/products/case", productController.createCase);

router.get("/products/cooler", productController.getAllCoolers);
router.get("/products/cooler/:id", productController.getCoolerByID);
router.post("/products/cooler", productController.createCooler);

router.get("/products/cpu", productController.getAllCPUs);
router.get("/products/cpu/:id", productController.getCPUByID);
router.post("/products/cpu", productController.createCPU);

router.get("/products/gpu", productController.getAllGPUs);
router.get("/products/gpu/:id", productController.getGPUByID);
router.post("/products/gpu", productController.createGPU);

router.get("/products/mobo", productController.getAllMOBOs);
router.get("/products/mobo/:id", productController.getMOBOByID);
router.post("/products/mobo", productController.createMOBO);

router.get("/products/os", productController.getAllOSs);
router.get("/products/os/:id", productController.getOSByID);
router.post("/products/os", productController.createOS);

router.get("/products/psu", productController.getAllPSUs);
router.get("/products/psu/:id", productController.getPSUByID);
router.post("/products/psu", productController.createPSU);

router.get("/products/ram", productController.getAllRAMs);
router.get("/products/ram/:id", productController.getRAMByID);
router.post("/products/ram", productController.createRAM);

router.get("/products/storage", productController.getAllStorages);
router.get("/products/storage/:id", productController.getStorageByID);
router.post("/products/storage", productController.createStorage);

router.put("/products/:id/stock", productController.updateStock);

export default router;