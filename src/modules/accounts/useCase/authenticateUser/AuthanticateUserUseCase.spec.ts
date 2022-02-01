import { AppError } from "../../../../errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { UserRepositoruInMemory } from "../../repository/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUsecase } from "./AutheticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUsecase;
let usersRepositoryInMemory: UserRepositoruInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate user", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UserRepositoruInMemory();
        authenticateUserUseCase = new AuthenticateUserUsecase(
            usersRepositoryInMemory
        );
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });
    it("Should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            driver_license: "000123",
            email: "teste@gmail.com",
            password: "123456",
            name: "User test",
        };
        await createUserUseCase.execute(user);

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password,
        });
        console.log(result);
        expect(result).toHaveProperty("token");
    });
    it("Should not be to authenticate a none existing user", () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                email: "falseUser@teste.com",
                password: "userpassword",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
