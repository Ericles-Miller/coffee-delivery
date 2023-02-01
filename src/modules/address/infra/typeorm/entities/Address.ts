import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('endereco')
class Address {
  @PrimaryColumn()
  id?: string;

  @Column()
  cep: number;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  district: string;

  @Column()
  complement?: string;

  @Column()
  city: string;

  @Column()
  uf: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Address };
