import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoryRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoryRoutes = Router();
const categoriesRepositiry = new CategoriesRepository();

categoryRoutes.post("/", (request, response) => {
    const { name, description } = request.body;
    const createCategoryService = new CreateCategoryService(
        categoriesRepositiry
    );
    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

categoryRoutes.get("/", (request, response) => {
    const all = categoriesRepositiry.list();
    return response.json(all);
});
export { categoryRoutes };
