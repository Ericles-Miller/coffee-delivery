import { Address } from '@modules/address/infra/typeorm/entities/Address';
import { IAddressRepository } from '@modules/address/Repositories/IAdressesRepository';
import { inject, injectable } from 'tsyringe';


interface IRequest{
    cep: number;
    street: string;
    number: number;
    district: string;
    complement: string;
    city: string;
    uf: string;
}

@injectable()
class CreateAddressUseCase {
  constructor(
    @inject('AddressRepository')
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
