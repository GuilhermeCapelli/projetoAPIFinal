import { MARCA } from "src/marca/marca.entity";
import { PrimaryColumn,Column, ManyToOne, Entity, JoinColumn } from "typeorm";

export class UsuarioEntity{
    @PrimaryColumn()
    ID: string;
    @Column()
    NOME: string;
    @Column()
    IDADE: BigInt;
    @Column()
    CIDADE: String;
    @Column()
    EMAIL: String;
    @Column()
    TELEFONE: String;
    @Column()
    Senha: String;
}
