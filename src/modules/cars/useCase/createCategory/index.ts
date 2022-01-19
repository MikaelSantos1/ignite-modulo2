import { CategoriesRepository } from "../../repositories/implemantations/CategoryRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
    const categoriesRepository = new CategoriesRepository();
    const createCagetoryUseCase = new CreateCategoryUseCase(
        categoriesRepository
    );

    const createCategoryController = new CreateCategoryController(
        createCagetoryUseCase
    );
    return createCategoryController;
};
