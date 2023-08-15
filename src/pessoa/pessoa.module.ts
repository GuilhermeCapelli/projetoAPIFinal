import { Module } from "@nestjs/common";
import { PessoaController } from "./pessoa.controller";
import { PessoaArmazenado } from "./pessoa.dm";


@Module({
    controllers:[PessoaController],
    providers:[PessoaArmazenado, ]
})
export class PessoaModule{

}