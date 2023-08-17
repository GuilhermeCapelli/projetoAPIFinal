import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";


export class CriaPessoaDTO{
    @IsString()
    @IsNotEmpty({message: "Nome não pode ser vazio"})
    NOME: string;

    @IsString()
    @IsNotEmpty({message: "Endereço não pode ser vazio"})
    ENDERECO: string;

    
    @IsString()
    @IsNotEmpty({message: "Telefone não pode ser vazio"})
    TELEFONE: string;

    
    @IsString()
    @IsNotEmpty({message: "Nome do Cachorro não pode ser vazio"})
    NOME_CACHORRO: string;

}