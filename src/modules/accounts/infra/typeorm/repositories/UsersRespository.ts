import { Repository, getRepository } from 'typeorm';

import { ICreatedUserDTO } from '../../../DTOs/ICreateUserDTO';
import { IUserRepository } from '../../../Repositories/IUserRepository';
import { User } from '../Entities/User';

class UsersRepository implements IUserRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name, password, email, userName,
  }: ICreatedUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      password,
      email,
      userName,
    });
    await this.repository.save(user);
  }
}
export { UsersRepository };
