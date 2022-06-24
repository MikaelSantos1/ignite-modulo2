import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
    car_id: string;
    specification_id: string[];
}
@injectable()
class CreateCarSpecificationUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository,
        @inject("SpecificationRepository")
        private specifcationsRepository: ISpecificationRepository
    ) {}
    async execute({ car_id, specification_id }: IRequest): Promise<Car> {
        const carsExists = await this.carsRepository.findById(car_id);
        if (!carsExists) {
            throw new AppError("Car does not exists!");
        }
        const specifications = await this.specifcationsRepository.findByIds(
            specification_id
        );
        carsExists.specifications = specifications;
        await this.carsRepository.create(carsExists);
        return carsExists;
    }
}
export { CreateCarSpecificationUseCase };
