import { hash } from 'bcryptjs';
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
    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      password: passwordHash,
      userName,
      email,
    });
  }
}

export { CreateUserUseCase };
