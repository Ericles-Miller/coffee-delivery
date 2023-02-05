import { ICreateAddressDTO } from '../DTOs/ICreateAddressDTO';

interface IAddressRepository {
    create(data:ICreateAddressDTO): Promise<void>;
}

export { IAddressRepository };
