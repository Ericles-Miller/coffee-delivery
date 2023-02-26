import { inject, injectable } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRespository';

interface IRequest {
  email:string;
  password: string;
}

interface IResponse{
  user:{
    name:string;
    email: string;
  },
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: UsersRepository,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    
  }
}

export { AuthenticateUserUseCase };
