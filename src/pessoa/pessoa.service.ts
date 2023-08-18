import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PESSOA } from './pessoa.entity';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import {v4 as uuid} from 'uuid';
 import { CriaPessoaDTO } from './dto/Cadastropessoa.dto';
import { listaPessoaFornDTO } from './dto/listaPessoaForn.dto';
import { listaPessoaDTO } from './dto/ConsultaPessoa.dto';

@Injectable()
export class PessoaService {
    constructor(
      @Inject('PESSOA_REPOSITORY')
      private pessoaRepository: Repository<PESSOA>,
    ) {}
  
    async listar(): Promise<PESSOA[]> {
      return this.pessoaRepository.find();
    }
  
    async inserir(dados: CriaPessoaDTO): Promise<RetornoCadastroDTO>{
      let pessoa = new PESSOA();
          pessoa.ID = uuid();
          pessoa.NOME = dados.NOME;
          pessoa.Endereco= dados.ENDERECO;
          pessoa.Telefone = dados.TELEFONE;
          pessoa.Nome_Cachorro = dados.Nome_Cachorro;
  
      return this.pessoaRepository.save(pessoa)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: pessoa.ID,
          message: "Pessoa cadastrada!"
        };
      })
      .catch((error) => {
        return <RetornoCadastroDTO>{
          id: "",
          message: "Houve um erro ao cadastrar." + error.message
        };
      })
  
      
    }
  
    localizarID(ID: string): Promise<PESSOA> {
      return this.pessoaRepository.findOne({
        where: {
          ID,
        },
      });
    }
  
    listaNomes(): Promise<any[]> {
      return this.pessoaRepository.find({
        select:{
          NOME:true,
        }
      });
    }
  
    // async listaComForn(NOME_MARCA?: string): Promise<listaPessoaFornDTO[]> {
      
    //   if (NOME_MARCA != undefined){
    //     var retorno = await (this.pessoaRepository // select marca.id as ID, marca.nome AS NOME_, pes_f.nome from marca ......
    //     .createQueryBuilder('marca')
    //     .select('marca.id','ID')
    //     .addSelect('marca.nome','nome_marca')
    //     .addSelect('pes_f.nome','nome_fornecedor')
    //     .leftJoin('for_marca', 'fm','fm.idmarca = marca.id')  
    //     .leftJoin('fornecedor', 'for','for.id = fm.idfornecedor')    
    //     .leftJoin('pessoa', 'pes_f','for.idpessoa = pes_f.id')  
    //     .where('marca.nome like :nomemarca',{ nomemarca: `%${NOME_MARCA}%` })         
    //     .getRawMany());  
    //   }
    //   else{      
    //     var retorno = await (this.marcaRepository // select marca.id as ID, marca.nome AS NOME_, pes_f.nome from marca ......
    //     .createQueryBuilder('marca')
    //     .select('marca.id','ID')
    //     .addSelect('marca.nome','nome_marca')
    //     .addSelect('pes_f.nome','nome_fornecedor')
    //     .leftJoin('for_marca', 'fm','fm.idmarca = marca.id')  
    //     .leftJoin('fornecedor', 'for','for.id = fm.idfornecedor')    
    //     .leftJoin('pessoa', 'pes_f','for.idpessoa = pes_f.id')  
    //     .getRawMany());      
    //   }
  
        
  
    //   const listaRetorno = retorno.map(
    //     marca => new listaMarcaFornDTO(
    //       marca.ID,
    //       marca.nome_marca,
    //       marca.nome_fornecedor
    //     )
    //   );
  
    //   return listaRetorno;    
    // }
  
    async remover(id: string): Promise<RetornoObjDTO> {
      const pessoa = await this.localizarID(id);
      
      return this.pessoaRepository.remove(pessoa)
      .then((result) => {
        return <RetornoObjDTO>{
          return: pessoa,
          message: "Pessoa excluida!"
        };
      })
      .catch((error) => {
        return <RetornoObjDTO>{
          return: pessoa,
          message: "Houve um erro ao excluir." + error.message
        };
      });  
    }
  
    async alterar(id: string, dados: CriaPessoaDTO): Promise<RetornoCadastroDTO> {
      const pessoa = await this.localizarID(id);
  
      Object.entries(dados).forEach(
        ([chave, valor]) => {
            if(chave=== 'id'){
                return;
            }
  
            pessoa[chave] = valor;
        }
      )
  
      return this.pessoaRepository.save(pessoa)
      .then((result) => {
        return <RetornoCadastroDTO>{
          id: pessoa.ID,
          message: "Marca alterada!"
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