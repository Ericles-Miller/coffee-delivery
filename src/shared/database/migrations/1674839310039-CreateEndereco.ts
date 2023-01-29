import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateEndereco1674839310039 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table ({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: "uuid",
                    },
                    {
                        name: 'cep',
                        type: 'varchar',
                    },
                    {
                        name: 'rua',
                        type: 'varchar',
                    },
                    {
                        name: 'numero',
                        type: 'int',
                    },
                    {
                        name: 'bairro',
                        type: 'varchar'
                    },
                    {
                        name:'complemento',
                        type: 'varchar',
                    },
                    {
                        name: "cidade",
                        type: 'varchar',
                    },
                    {
                        name: 'uf',
                        type: 'varchar',
                    }



                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
