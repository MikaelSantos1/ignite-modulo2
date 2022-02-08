import { getRepository, Repository } from "typeorm";

import {
    ISpecificationRepository,
    ISpecificationRepositoryDTO,
} from "../../../repositories/ISpecificationRepository";
import { Specification } from "../entities/Specification";

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({
        name,
        description,
    }: ISpecificationRepositoryDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name,
        });

        await this.repository.save(specification);
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({ name });
        return specification;
    }
}
export { SpecificationRepository };
