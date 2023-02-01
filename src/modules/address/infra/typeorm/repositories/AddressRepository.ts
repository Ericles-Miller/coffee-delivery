import { Repository, getRepository } from 'typeorm';

import { ICreateAdressesDTO } from '../../../DTOs/ICreateAdressesDTO';
import { IAddressRepository } from '../../../Repositories/IAddressRepository';
import { Adresses } from '../entities/Adresses';

class AddressRepository implements IAddressRepository {
  private repository: Repository<Adresses>

  constructor() {
    this.repository = getRepository(Adresses);
  }

  async create({
    id, number, cep, city, complement, district, street, uf,
  }: ICreateAdressesDTO):Promise<void> {
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
