import { response } from 'express';

import { ICreatedUserDTO } from '../../DTOs/ICreateUserDTO';
import { IUserRepository } from '../../Repositories/IUserRepository';
import { User } from '../entities';

const users: User[] = [];

class UsersRepository implements IUserRepository {
  create({
    name, password, email, userName,
  }:
  ICreatedUserDTO): User[] {
    const user = new User();

    user.name = name;
    user.password = password;
    user.email = email;
    user.userName = userName;

    users.push(user);

    return users;
  }
}

export { UsersRepository };
