import { CreateSpecificationController } from "@modules/cars/useCase/createSpecification/CreateSpecificationController";
import { Router } from "express";

import { ensureAuthenticed } from "../middlewares/ensureAuthenticated";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
specificationRoutes.use(ensureAuthenticed);
specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
