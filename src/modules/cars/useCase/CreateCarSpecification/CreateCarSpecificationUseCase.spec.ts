import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationInMemory";

import { AppError } from "@shared/errors/AppError";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let createCarSpecifationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepository: SpecificationRepositoryInMemory;
describe("Create car specification", () => {
    beforeEach(() => {
        specificationsRepository = new SpecificationRepositoryInMemory();
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        createCarSpecifationUseCase = new CreateCarSpecificationUseCase(
            carsRepositoryInMemory,
            specificationsRepository
        );
    });
    it("Should not  be able to add a new specification to a not existent car", async () => {
        expect(async () => {
            const car_id = "123";
            const specification_id = ["54321"];
            await createCarSpecifationUseCase.execute({
                car_id,
                specification_id,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
    it("Should be able to add a new specification to the car", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Name car",
            description: "Description car ",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category",
        });

        const specification = await specificationsRepository.create({
            description: "test",
            name: "test",
        });

        const specification_id = [specification.id];
        const specificationsCars = await createCarSpecifationUseCase.execute({
            car_id: car.id,
            specification_id,
        });
        expect(specificationsCars).toHaveProperty("specifications");
        expect(specificationsCars.specifications.length).toBe(1);
    });
});
