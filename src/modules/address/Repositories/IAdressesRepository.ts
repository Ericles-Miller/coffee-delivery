import { ICreateAddressDTO } from '../DTOs/ICreateAddressDTO';
import { Address } from '../infra/typeorm/entities/Address';

interface IAddressRepository {
    create(data:ICreateAddressDTO): Promise<Address>;
}

export { IAddressRepository };
