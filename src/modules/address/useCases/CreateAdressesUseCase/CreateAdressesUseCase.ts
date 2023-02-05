import { inject } from 'tsyringe';

import { AdressesRepository } from '../../infra/typeorm/repositories/AddressRepository';
import { IAdressesRepository } from '../../Repositories/IAdressesRepository';

class CreateAdressesUseCase {
  constructor(
    @inject(AdressesRepository)
    private adressesRepository: IAdressesRepository,
  ) {}

  execute() {

  }
}

export { CreateAdressesUseCase };
