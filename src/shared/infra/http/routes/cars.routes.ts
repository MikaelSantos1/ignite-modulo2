import { CreateCarController } from "@modules/cars/useCase/createCar/CreateCarController";
import { ListAvailableCarsController } from "@modules/cars/useCase/listAvailableCars/ListAvailableCarsController";
import { Router } from "express";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticed } from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
carsRoutes.post(
    "/",
    ensureAuthenticed,
    ensureAdmin,
    createCarController.handle
);
carsRoutes.get("/available", listAvailableCarsController.handle);
export { carsRoutes };
