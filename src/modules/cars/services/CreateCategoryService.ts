import { CategoriesRepository } from "../repositories/CategoryRepository";

interface IRequest {
    name: string;
    description: string;
}
class CreateCategoryService {
    constructor(private categoriesRepositiry: CategoriesRepository) {}

    execute({ description, name }: IRequest): void {
        const categoryAlreadyExists =
            this.categoriesRepositiry.findByName(name);
        if (categoryAlreadyExists) {
            throw new Error("Category already exists");
        }
        this.categoriesRepositiry.create({ name, description });
    }
}
export { CreateCategoryService };
