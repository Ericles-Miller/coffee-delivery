import { ICreateAdressesDTO } from '../DTOs/ICreateAdressesDTO';

interface IAdressesRepository {
    create(data:ICreateAdressesDTO): Promise<void>;
}

export { IAdressesRepository };
