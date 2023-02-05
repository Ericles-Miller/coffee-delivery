import { ICreateAdressesDTO } from '../DTOs/ICreateAddressDTO';

interface IAdressesRepository {
    create(data:ICreateAdressesDTO): Promise<void>;
}

export { IAdressesRepository };
