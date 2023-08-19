import { CriaUsuarioDTO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuariosArmazenados } from "./usuario.dm";
import {v4 as uuid} from 'uuid';
import { listaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";
import {  Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { RetornoCadastroDTO } from "src/dto/retorno.dto";

@Controller('/usuarios')
export class UsuarioController{
    constructor(private readonly usuarioService: UsuarioService){
    }


    @Get('listar')
    async listar(): Promise<UsuarioEntity[]>{
        return this.usuarioService.listar();
    }

    @Get('listausuario')
    async listarusuarios(): Promise<listaUsuarioDTO[]>{
        return this.usuarioService.listausuarios();
    }

    @Post('')
    async criaProduto(@Body() dados: CriaUsuarioDTO): Promise<RetornoCadastroDTO>{        
        return this.usuarioService.inserir(dados)        
    }

    @Put(':id')
    async alterarProduto(@Body() dados: AlteraUsuarioDTO,@Param('id') id: string): Promise<RetornoCadastroDTO>{        
        return this.usuarioService.alterarUsuario(id,dados)        
    }
    
    @Get('ID-:id')
    async listarID(@Param('id') id: string): Promise<UsuarioEntity>{
        return this.usuarioService.localizarID(id);
    }

    @Get('')
    async listaNome(@Param('id') id: string): Promise<any>{
        return this.usuarioService.listausuarios();
    }

    @Delete(':id')
    async removeusuario(@Param('id') id: string): Promise<RetornoCadastroDTO>{
        return this.usuarioService.remover(id);
    }
    
}