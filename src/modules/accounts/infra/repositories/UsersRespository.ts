import { ICreatedUserDTO } from '../../DTOs/ICreateUserDTO';
import { IUserRepository } from '../../Repositories/IUserRepository';
import { User } from '../entities';

const users: User[] = [];

class UsersRepository implements IUserRepository {
  create({ name, password, email, userName, id } : ICreatedUserDTO): Promise<void> {
    const user: User = {
      name,
      password,
      email,
      userName,
      id: uuidV4(),
    };

    users.push(user);

    return removeEventListener
  
  }
}

export { UsersRepository };
  function uuidV4(): string {
    throw new Error('Function not implemented.');
  }

