import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import {v4 as uuid} from 'uuid';
import { CriaUsuarioDTO } from './dto/usuario.dto';
import { listaUsuarioDTO } from './dto/listaUsuario.dto';
import { AlteraUsuarioDTO } from './dto/atualizaUsuario.dto';
import { PESSOA } from 'src/pessoa/pessoa.entity';

@Injectable()
export class UsuarioService {
  constructor(    
    @Inject('USUARIO_REPOSITORY')
    private USUARIO_REPOSITORY: Repository<UsuarioEntity>,      
    @Inject('PESSOA_REPOSITORY')
    private PESSOA_REPOSITORY: Repository<PESSOA>,  
    private readonly UsuarioService: UsuarioService
  ) {}
    
  

  async listar(): Promise<UsuarioEntity[]> {
    return this.USUARIO_REPOSITORY.find();
  }

  async listarMarca(): Promise<listaUsuarioDTO[]> {
    var resultado = await (this.USUARIO_REPOSITORY // select marca.id as ID, marca.nome AS NOME_, pes_f.nome from marca ......
      .createQueryBuilder('produto')
      .select('produto.ID', 'ID')
      .addSelect('produto.NOME','NOME_PRODUTO')
      .addSelect('produto.PRECO','PRECO_PRODUTO')
      .addSelect('MA.NOME','MARCA')
      .leftJoin('marca', 'MA','produto.idmarca = MA.id')                     
      .getRawMany());  

    const listaRetorno = resultado.map(
      usuario => new listaUsuarioDTO(
        usuario.id ,
        usuario.nome,
        usuario.idade,
        usuario.Cidade,
        usuario.email,
        usuario.telefone,
      )
    );

    return listaRetorno;
  }


  async inserir(dados: CriaUsuarioDTO): Promise<RetornoCadastroDTO>{
       
    let usuario = new UsuarioEntity();
        usuario.ID = uuid();
        usuario.NOME = dados.nome;        
        usuario.TELEFONE = dados.telefone;
        usuario.CIDADE = dados.cidade;
        usuario.EMAIL = dados.email;
        usuario.Senha = dados.senha;


    return this.USUARIO_REPOSITORY.save(usuario)
    .then((result) => {
      return <RetornoCadastroDTO>{
        id: usuario.ID,
        message: "Usuario cadastrado!"
      };
    })
    .catch((error) => {
      return <RetornoCadastroDTO>{
        id: "",
        message: "Houve um erro ao cadastrar." + error.message
      };
    })

    
  }

  localizarID(ID: string): Promise<UsuarioEntity> {
    return this.USUARIO_REPOSITORY.findOne({
      where: {
        ID,
      },
    });
  }

  listausuarios(): Promise<any[]> {
    return this.USUARIO_REPOSITORY.find({
      select:{
        NOME:true,
      }
    });
  }

  async remover(id: string): Promise<RetornoObjDTO> {
    const USUARIO = await this.localizarID(id);
    
    return this.USUARIO_REPOSITORY.remove(USUARIO)
    .then((result) => {
      return <RetornoObjDTO>{
        return: USUARIO,
        message: "USUARIO excluida!"
      };
    })
    .catch((error) => {
      return <RetornoObjDTO>{
        return: USUARIO,
        message: "Houve um erro ao excluir." + error.message
      };
    });  
  }

  async alterarUsuario(id: string, dados: AlteraUsuarioDTO): Promise<RetornoCadastroDTO> {
    const USUARIO = await this.localizarID(id);

    Object.entries(dados).forEach(
      async([chave, valor]) => {
          if(chave=== 'ID'){
              return;
          }

          if(chave=== 'IDMARCA'){
            USUARIO['MARCA'] = await this.UsuarioService.localizarID(valor);
            return;
           }

           USUARIO[chave] = valor;
      }
    )

    return this.USUARIO_REPOSITORY.save(USUARIO)
    .then((result) => {
      return <RetornoCadastroDTO>{
        id: USUARIO.ID,
        message: "USUARIO ALTERADO!"
      };
    })
    .catch((error) => {
      return <RetornoCadastroDTO>{
        id: "",
        message: "Houve um erro ao alterar." + error.message
      };
    });
  }
}