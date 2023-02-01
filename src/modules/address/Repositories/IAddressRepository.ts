import { ICreateAddressDTO } from '../DTOs/ICreateAddressDTO';

interface IAddressRepository {
    create(data:ICreateAddressDTO): void;
}

export { IAddressRepository };
