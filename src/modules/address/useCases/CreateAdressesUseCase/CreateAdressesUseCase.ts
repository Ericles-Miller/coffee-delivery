import { inject } from 'tsyringe';

import { Address } from '../../infra/typeorm/entities/Address';
import { AddressRepository } from '../../infra/typeorm/repositories/AddressRepository';
import { IAddressRepository } from '../../Repositories/IAdressesRepository';

interface IRequest{
    cep: number;
    street: string;
    number: number;
    district: string;
    complement: string;
    city: string;
    uf: string;
}

class CreateAddressUseCase {
  constructor(
    @inject(AddressRepository)
    private addressRepository: IAddressRepository,
  ) {}

  async execute({
    cep, street, number, district, complement, city, uf,
  }: IRequest) : Promise<Address> {
    const address = await this.addressRepository.create({
      cep,
      street,
      number,
      district,
      complement,
      city,
      uf,
    });

    return address;
  }
}

export { CreateAddressUseCase };
