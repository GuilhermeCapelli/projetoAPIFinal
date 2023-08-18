import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import {v4 as uuid} from 'uuid';
import { CriaUsuarioDTO } from './dto/usuario.dto';
import { listaUsuarioDTO } from './dto/listaUsuario.dto';
import { AlteraUsuarioDTO } from './dto/atualizaUsuario.dto';
import { UsuarioProviders } from './usuario.providers';

@Injectable()
export class UsuarioService {
  constructor(    
    @Inject('PRODUTO_REPOSITORY')
    private USUARIO_REPOSITORY: Repository<UsuarioEntity>,      
    @Inject('MARCA_REPOSITORY')
    private usuario_repository: Repository<UsuarioEntity>,  
    private readonly usuarioRepository: UsuarioService
  ) {}
}