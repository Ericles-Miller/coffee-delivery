import { IUserRepository } from "../../Repositories/IUserRepository";


class UsersRepository implements IUserRepository {

  create(data: ICreatedUserDTO): Promise<void> {
  }
}

export { UsersRepository }

