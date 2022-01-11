import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCase/createCategory";
import { listCategoryController } from "../modules/cars/useCase/listCategory";

const categoryRoutes = Router();

categoryRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoryRoutes.get("/", (request, response) => {
    return listCategoryController.handle(request, response);
});
export { categoryRoutes };
