import { Router } from "express";

import { ensureAuthenticed } from "../middlewares/ensureAuthenticated";
import { CreateSpecificationController } from "../modules/cars/useCase/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
specificationRoutes.use(ensureAuthenticed);
specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes };
