import { ICreatedUserDTO } from '../DTOs/ICreateUserDTO';

interface IUserRepository {
    create(data: ICreatedUserDTO): Promise<void>;
}
export { IUserRepository };
