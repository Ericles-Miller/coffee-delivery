import { ICreatedUserDTO } from '../DTOs/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';

interface IUsersRepository {
    create(data: ICreatedUserDTO): Promise<void>;
    findByEmail(email: string) : Promise<User|undefined>
}
export { IUsersRepository };
