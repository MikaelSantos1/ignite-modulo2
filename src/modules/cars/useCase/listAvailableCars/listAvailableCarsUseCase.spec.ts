import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
describe("List cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory
        );
    });
    it("Should be able do list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car1",
            description: "Car description",
            daily_rate: 40.0,
            license_plate: "ABCDEF-1234",
            fine_amount: 110.0,
            brand: "Car brand",
            category_id: "category_id",
        });
        const cars = await listAvailableCarsUseCase.execute({});
        expect(cars).toEqual([car]);
        console.log(cars);
    });
    it("Should be able to all available car by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car1",
            description: "Car description",
            daily_rate: 40.0,
            license_plate: "ABCDEF-1234",
            fine_amount: 110.0,
            brand: "Car brand_Test",
            category_id: "category_id",
        });
        const cars = await listAvailableCarsUseCase.execute({
            brand: "Car brand_Test",
        });
        expect(cars).toEqual([car]);
    });

    it("Should be able to all available car by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car3",
            description: "Car description",
            daily_rate: 40.0,
            license_plate: "DEF-1234",
            fine_amount: 110.0,
            brand: "Car brand_Test",
            category_id: "category_id",
        });
        const cars = await listAvailableCarsUseCase.execute({
            name: "Car3",
        });
        expect(cars).toEqual([car]);
    });
    it("Should be able to all available car by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car3",
            description: "Car description",
            daily_rate: 40.0,
            license_plate: "DEF-1234",
            fine_amount: 110.0,
            brand: "Car brand_Test",
            category_id: "12345",
        });
        const cars = await listAvailableCarsUseCase.execute({
            category_id: "12345",
        });
        expect(cars).toEqual([car]);
    });
});
