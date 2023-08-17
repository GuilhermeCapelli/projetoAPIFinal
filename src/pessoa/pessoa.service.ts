import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PESSOA } from './pessoa.entity';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import {v4 as uuid} from 'uuid';
// import { CriaMarcaDTO } from './dto/Cadastropessoa.dto';
// import { listaMarcaDTO } from './dto/ConsultaPessoa.dto';

@Injectable()
export class PessoaService {

}