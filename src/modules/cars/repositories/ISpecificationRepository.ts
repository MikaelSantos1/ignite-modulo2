interface ISpecificationRepositoryDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create({ name, description }: ISpecificationRepositoryDTO): void;
    findByName(name: string);
}

export { ISpecificationRepository, ISpecificationRepositoryDTO };
