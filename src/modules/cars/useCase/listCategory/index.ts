import { CategoriesRepository } from "../../repositories/implemantations/CategoryRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoriesUseCase } from "./ListCategoryUseCase";

const listCategoryRepository = CategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(listCategoryRepository);
const listCategoryController = new ListCategoryController(
    listCategoriesUseCase
);

export { listCategoryController };
