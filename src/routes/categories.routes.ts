import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoryRepository";
import { createCategoryController } from "../modules/cars/useCase/createCategory";

const categoryRoutes = Router();
const categoriesRepositiry = new CategoriesRepository();

categoryRoutes.post("/", (request, response) => {
    return createCategoryController.handle(request, response);
});

categoryRoutes.get("/", (request, response) => {
    const all = categoriesRepositiry.list();
    return response.json(all);
});
export { categoryRoutes };
