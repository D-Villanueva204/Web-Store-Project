import express, {Router} from "express"
import { validateRequest } from "../middleware/validate"
import { favouriteSchema } from "../validations/favouritesSchema"
import * as favouriteController from "../controllers/favouritesController"
import { findOrCreateUser } from "../middleware/findOrCreateUser"

const router: Router = express.Router();

router.get("/favourites", findOrCreateUser, favouriteController.getAllFavourites)

router.post("/favourites", validateRequest(favouriteSchema),
    findOrCreateUser,
    favouriteController.createFavourite);

router.delete("/favourites/:id", findOrCreateUser, favouriteController.deleteFavourite);

export default router;