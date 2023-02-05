import { Repository, getRepository } from 'typeorm';

import { ICreateAddressDTO } from '../../../DTOs/ICreateAddressDTO';
import { IAdressesRepository } from '../../../Repositories/IAdressesRepository';
import { Address } from '../entities/Address';

class AddressRepository implements IAdressesRepository {
  private repository: Repository<Address>

  constructor() {
    this.repository = getRepository(Address);
  }

  async create({
    id, number, cep, city, complement, district, street, uf,
  }: ICreateAddressDTO):Promise<void> {
    const address = this.repository.create({
      id,
      cep,
      city,
      complement,
      district,
      number,
      street,
      uf,
    });

    await this.repository.save(address);
  }
}

export { AddressRepository };
