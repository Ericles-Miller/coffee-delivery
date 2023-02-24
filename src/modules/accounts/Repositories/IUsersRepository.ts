import { ICreatedUserDTO } from '../DTOs/ICreateUserDTO';

interface IUsersRepository {
    create(data: ICreatedUserDTO): Promise<void>;
}
export { IUsersRepository };
