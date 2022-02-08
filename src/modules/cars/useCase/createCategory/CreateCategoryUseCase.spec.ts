import { AppError } from "../../../../shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

describe("Create category", () => {
    let createCategoryUseCase: CreateCategoryUseCase;
    let categoryRepositoriesInMemory: CategoriesRepositoryInMemory;
    beforeEach(() => {
        categoryRepositoriesInMemory = new CategoriesRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(
            categoryRepositoriesInMemory
        );
    });

    it("should be able to create a new category", async () => {
        const category = {
            name: "Categories test",
            description: "Categories description test",
        };
        await createCategoryUseCase.execute({
            name: category.name,
            description: category.description,
        });
        const categoryCreated = await categoryRepositoriesInMemory.findByName(
            category.name
        );
        console.log(categoryCreated);
        expect(categoryCreated).toHaveProperty("id");
    });

    it("should not be able to create a new with name exits", async () => {
        expect(async () => {
            const category = {
                name: "Categories test",
                description: "Categories description test",
            };
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description,
            });
            await createCategoryUseCase.execute({
                name: category.name,
                description: category.description,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
