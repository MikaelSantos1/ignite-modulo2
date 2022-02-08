import { IUserRepository } from "@modules/accounts/repository/IUsersRepository";
import { deleteFile } from "@utils/file";
import { inject, injectable } from "tsyringe";

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
        await deleteFile(`./tmp/avatar/${user.avatar}`);
        user.avatar = avatar_file;

        await this.usersRepository.create(user);
    }
}
export { UpdateUsersAvatarUseCase };
