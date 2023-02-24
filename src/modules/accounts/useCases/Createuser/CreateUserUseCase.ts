import { inject, injectable } from 'tsyringe';

import { ICreatedUserDTO } from '../../DTOs/ICreateUserDTO';
import { IUsersRepository } from '../../Repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name, password, email, userName,
  } : ICreatedUserDTO) : Promise<void> {
    await this.usersRepository.create({
      name,
      password,
      userName,
      email,
    });
  }
}

export { CreateUserUseCase };
