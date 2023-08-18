import { PRODUTO } from 'src/produto/produto.entity';
import {Entity,Column, PrimaryColumn, OneToMany} from 'typeorm';

@Entity()
export class PESSOA{
    @PrimaryColumn()
    ID: string;

    @Column()
    NOME: string;

    @Column()
    Telefone: String;

    @Column()
    Endereco: string;

}