import { inject, injectable } from 'tsyringe';

import { ICreatedUserDTO } from '../../DTOs/ICreateUserDTO';
import { IUserRepository } from '../../Repositories/IUserRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({
    name, password, email, userName,
  } : ICreatedUserDTO) : Promise<void> {
    await this.userRepository.create({
      name,
      password,
      userName,
      email,
    });
  }
}

export { CreateUserUseCase };
