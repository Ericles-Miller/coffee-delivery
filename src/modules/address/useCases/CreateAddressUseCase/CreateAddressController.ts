import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAddressUseCase } from './CreateAddressUseCase';


class CreateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      cep, number, uf, street, district, complement, city,
    } = request.body;

    const createAddressUseCase = container.resolve(CreateAddressUseCase);

    const address = await createAddressUseCase.execute({
      cep,
      number,
      uf,
      street,
      district,
      complement,
      city,
    });

    return response.status(200).json(address);
  }
}

export { CreateAddressController };
