    import { CriaPessoaDto } from "./dto/Cadastropessoa.dto";
    import { PessoaEntity } from "./pessoa.entity";
    import { PessoaArmazenado  } from "./pessoa.dm";
    import {v4 as uuid} from 'uuid';
    import { listapessoaDTO } from "./dto/ConsultaPessoa.dto";
    import { AlteraPessoa } from "./dto/AlteraPessoa.dto";
    import {  Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

    @Controller('/pessoas')
    export class PessoaController{
        constructor(private clsPessoasArmazenado: PessoaArmazenado){            
        }
            
        @Get()
        async RetornoPessoa(){
            const PessoasListados = await this.clsPessoasArmazenado.Pessoa;
            const listaRetorno = PessoasListados.map(
                pessoa => new listapessoaDTO(
                    pessoa.id,
                    pessoa.nome
                )
            );
            
            return listaRetorno;
        }

    // fazer GET de filtro de usuário por nome ou email

    @Post()    
    async CriaPessoa(@Body() DadosPessoa: CriaPessoaDto){
    
        var Pessoa = new PessoaEntity(uuid(),DadosPessoa.nome,DadosPessoa.endereco,DadosPessoa.telefone,DadosPessoa.nome_do_cachorro)
        var RetornoPessoa;
            
        this.clsPessoasArmazenado.AdicionarPessoa(Pessoa);
        RetornoPessoa={
            id: Pessoa.id,
            message:'Pessoa Criado'
        }

        
        return RetornoPessoa;
    }


    @Put('/:id')
    async AtualizaPessoa(@Param('id') id: string, @Body() novosDados: AlteraPessoa){
        const PessoaAtualizado = await this.clsPessoasArmazenado.AtualizaPessoa(id, novosDados);
        return {
            usuario: PessoaAtualizado,
            message: 'Usuário atualizado'
        }
    }

    @Delete('/:id')
    async removePessoa(@Param('id') id: string){
        const PessoaRemovido = await this.clsPessoasArmazenado.removePessoa(id);
        return {
            usuario: PessoaRemovido,
            message: 'Usuário removido'
        }
    }
}