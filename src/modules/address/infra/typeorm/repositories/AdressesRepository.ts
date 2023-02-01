import { Repository, getRepository } from 'typeorm';

import { ICreateAdressesDTO } from '../../../DTOs/ICreateAdressesDTO';
import { IAdressesRepository } from '../../../Repositories/IAdressesRepository';
import { Adresses } from '../entities/Adresses';

class AdressesRepository implements IAdressesRepository {
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

export { AdressesRepository };
