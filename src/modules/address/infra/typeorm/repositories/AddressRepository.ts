import { Repository, getRepository } from 'typeorm';

import { ICreateAddressDTO } from '../../../DTOs/ICreateAddressDTO';
import { IAddressRepository } from '../../../Repositories/IAdressesRepository';
import { Address } from '../entities/Address';

class AddressRepository implements IAddressRepository {
  private repository: Repository<Address>

  constructor() {
    this.repository = getRepository(Address);
  }

  async create({
    id, number, cep, city, complement, district, street, uf,
  }: ICreateAddressDTO):Promise<Address> {
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

    return address;
  }
}

export { AddressRepository };
