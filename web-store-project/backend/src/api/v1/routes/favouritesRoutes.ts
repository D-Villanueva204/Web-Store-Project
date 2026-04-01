import express, {Router} from "express"
import { validateRequest } from "../middleware/validate"
import { favouriteSchema } from "../validations/favouritesSchema"
import * as favouriteController from "../controllers/favouritesController"

const router: Router = express.Router();

router.get("/favourites", favouriteController.getAllFavourites)

router.post("/favourites", validateRequest(favouriteSchema),
    favouriteController.createFavourite);

router.delete("/favourites/:id", favouriteController.deleteFavourite);

export default router;