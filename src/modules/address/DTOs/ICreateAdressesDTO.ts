interface ICreateAdressesDTO {
    id?: string;
    cep: number;
    street: string;
    district: string;
    complement: string;
    city: string;
    uf: string;
    number: number;
}

export { ICreateAdressesDTO };
