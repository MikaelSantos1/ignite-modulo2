import { CreateSpecificationController } from "@modules/cars/useCase/createSpecification/CreateSpecificationController";
import { Router } from "express";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticed } from "../middlewares/ensureAuthenticated";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post(
    "/",
    ensureAuthenticed,
    ensureAdmin,
    createSpecificationController.handle
);

export { specificationRoutes };
