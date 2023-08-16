import { IsEmail, IsInt, IsNotEmpty } from "class-validator";

export class CriaPessoaDto{    
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    nome: string;

    @IsNotEmpty({message: "Telefone inválido"})
    telefone: string;
     
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    endereco: string;

    @IsNotEmpty({message: "Telefone inválido"})
    nome_do_cachorro: string;
}