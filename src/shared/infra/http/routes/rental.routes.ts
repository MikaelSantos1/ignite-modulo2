import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { Router } from "express";

import { ensureAuthenticed } from "../middlewares/ensureAuthenticated";

const rentalRoutes = Router();
const createRentalController = new CreateRentalController();

rentalRoutes.post("/", ensureAuthenticed, createRentalController.handle);
export { rentalRoutes };
