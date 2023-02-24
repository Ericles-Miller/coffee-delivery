import { Response, Request } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  async handle(request:Request, response: Response): Promise<Response> {
    const {
      name, email, password, userName,
    } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);
    console.log('aaaaa');
    await createUserUseCase.execute({
      name,
      userName,
      email,
      password,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
