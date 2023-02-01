import { inject } from 'tsyringe';

import { AdressesRepository } from '../../infra/typeorm/repositories/AdressesRepository';
import { IAdressesRepository } from '../../Repositories/IAdressesRepository';

class CreateAdressesUseCase {
  constructor(
    @inject(AdressesRepository)
    private adressesRepository: IAdressesRepository,
  ) {}
}

export { CreateAdressesUseCase };
