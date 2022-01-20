import {container} from 'tsyringe'

import {ICategoriesRepository} from '../../modules/cars/repositories/ICategoriesRepository'
import {ISpecificationRepository} from '../../modules/cars/repositories/ISpecificationRepository'

import {CategoriesRepository}from '../../modules/cars/repositories/implemantations/CategoryRepository'
import { SpecificationRepository}from '../../modules/cars/repositories/implemantations/SpecificationRepository'

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
)
