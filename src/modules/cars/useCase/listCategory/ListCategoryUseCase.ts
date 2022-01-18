import { Category } from "../../model/Category";
import { ICatergoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICatergoriesRepository) {}

    execute(): Category[] {
        const categories = this.categoriesRepository.list();
        return categories;
    }
}
export { ListCategoriesUseCase };
