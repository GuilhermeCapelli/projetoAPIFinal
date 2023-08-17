 import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PessoaService } from "./pessoa.service";
import { PESSOA } from "./pessoa.entity";
import { CriaPessoaDTO } from "./dto/Cadastropessoa.dto";
import { RetornoCadastroDTO, RetornoObjDTO } from "src/dto/retorno.dto";
import { PesquisaMarcaDTO } from "src/marca/dto/pesquisaMarca.dto";
import { listaPessoaFornDTO } from "./dto/listaPessoaForn.dto";


@Controller('/pessoa')
export class PessoaController{
    constructor(private readonly pessoa: PessoaService){
             
    }

    @Get('listar')
    async listar(): Promise<PESSOA[]>{
        return this.pessoa.listar();
    }

    @Post('')
    async criaMarca(@Body() dados: CriaPessoaDTO): Promise<RetornoCadastroDTO>{        
        return this.pessoa.inserir(dados)        
    }

    @Put(':id')
    async alterarMarca(@Body() dados: CriaPessoaDTO,@Param('id') id: string): Promise<RetornoCadastroDTO>{        
        return this.pessoa.alterar(id,dados)        
    }
    
    @Get('ID-:id')
    async listarID(@Param('id') id: string): Promise<PESSOA>{
        return this.pessoa.localizarID(id);
    }

    @Get('')
    async listaNome(@Param('id') id: string): Promise<any>{
        return this.pessoa.listaNomes();
    }

    @Delete('remove-:id')
    async removeMarca(@Param('id') id: string): Promise<RetornoObjDTO>{
        return this.pessoa.remover(id);
    }

    // @Get('ComForn/')
    // async listaMarcaForn(@Body() dados: PesquisaMarcaDTO): Promise<listaPessoaFornDTO[]>{
    //     return await this.pessoa.listacomForn(dados.NOME);
    // }
    

}