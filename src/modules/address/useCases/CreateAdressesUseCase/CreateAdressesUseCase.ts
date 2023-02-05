import { inject } from 'tsyringe';

import { AddressRepository } from '../../infra/typeorm/repositories/AddressRepository';
import { IAddressRepository } from '../../Repositories/IAdressesRepository';

class CreateAddressUseCase {
  constructor(
    @inject(AddressRepository)
    private addressRepository: IAddressRepository,
  ) {}

  execute() {

  }
}

export { CreateAddressUseCase };
