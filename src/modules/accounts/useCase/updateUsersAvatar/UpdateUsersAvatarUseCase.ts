import { inject, injectable } from "tsyringe";

import { IUserRepository } from "../../repository/IUsersRepository";

interface IRequest {
    user_id: string;
    avatar_file: string;
}

@injectable()
class UpdateUsersAvatarUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUserRepository
    ) {}
    async execute({ user_id, avatar_file }: IRequest): Promise<void> {
        const user = await this.usersRepository.findById(user_id);
        user.avatar = avatar_file;

        await this.usersRepository.create(user);
    }
}
export { UpdateUsersAvatarUseCase };
