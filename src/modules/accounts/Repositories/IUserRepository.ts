import { ICreatedUserDTO } from '../DTOs/ICreateUserDTO';
import { User } from '../infra/entities';

interface IUserRepository {
    create(data: ICreatedUserDTO): User[];
}

export { IUserRepository };
