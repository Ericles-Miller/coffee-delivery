import { ICreateAdressesDTO } from '../DTOs/ICreateAdressesDTO';

interface IAddressRepository {
    create(data:ICreateAdressesDTO): Promise<void>;
}

export { IAddressRepository };
