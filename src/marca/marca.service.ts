import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MARCA } from './marca.entity';
import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import {v4 as uuid} from 'uuid';
import { CriaMarcaDTO } from './dto/criaMarca.dto';
import { listaMarcaDTO } from './dto/listaMarca.dto';
import { listaMarcaFornDTO } from './dto/listaMarcaForn.dto';

@Injectable()
export class MarcaService {

}