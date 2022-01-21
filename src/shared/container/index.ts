import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repository/implementations/UsersRepository";
import { IUserRepository } from "../../modules/accounts/repository/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implemantations/CategoryRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implemantations/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/ISpecificationRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);

container.register<IUserRepository>("UsersRepository", UsersRepository);
