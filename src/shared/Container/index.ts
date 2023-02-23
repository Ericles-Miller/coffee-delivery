import { container } from 'tsyringe';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRespository';
import { IUserRepository } from '@modules/accounts/Repositories/IUserRepository';
import { AddressRepository } from '@modules/address/infra/typeorm/repositories/AddressRepository';
import { IAddressRepository } from '@modules/address/Repositories/IAdressesRepository';

container.registerSingleton<IAddressRepository>(
  'AddressRepository',
  AddressRepository,
);

container.registerSingleton<IUserRepository>(
  'UsersRepository',
  UsersRepository,
);
