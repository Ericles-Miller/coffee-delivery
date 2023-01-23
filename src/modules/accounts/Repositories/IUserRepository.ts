
interface IUserRepository {
    create(data: ICreatedUserDTO): Promise<void>;
}

export {IUserRepository};