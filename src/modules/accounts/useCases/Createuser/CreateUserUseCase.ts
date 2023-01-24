import { ICreatedUserDTO } from '../../DTOs/ICreateUserDTO';
import { IUserRepository } from '../../Repositories/IUserRepository';

class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
  ) {}

  execute({ name, password, email, userName }: ICreatedUserDTO) {
    const user = this.userRepository.create({
      name,
      password,
      userName,
      email,
    });
  }
}

export { CreateUserUseCase };
