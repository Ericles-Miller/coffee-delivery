import { container } from 'tsyringe';

import { AddressRepository } from '@modules/address/infra/typeorm/repositories/AddressRepository';
import { IAddressRepository } from '@modules/address/Repositories/IAdressesRepository';

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository,
);
