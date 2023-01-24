import { IUserRepository } from '../../Repositories/IUserRepository';

class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
  ) {}

  execute({ name, password, email }: ICreatedUserDTO) {
    this.userRepository.create({
      name,
      password,
      email,
    });
  }
}

export { CreateUserUseCase };
