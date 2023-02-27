import { Repository, getRepository } from 'typeorm';

import { ICreatedUserDTO } from '../../../DTOs/ICreateUserDTO';
import { IUsersRepository } from '../../../Repositories/IUsersRepository';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User);
  }
  async findByEmail(email: string): Promise<User|undefined> {
    const user = await this.repository.findOne({ email });
    return user;
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
