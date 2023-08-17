import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { MARCA } from "./marca.entity";
import { PessoaService } from "src/pessoa/pessoa.service";
import { CriaMarcaDTO } from "./dto/criaMarca.dto";
import { RetornoCadastroDTO, RetornoObjDTO } from "src/dto/retorno.dto";
import { listaMarcaFornDTO } from "./dto/listaMarcaForn.dto";
import { PesquisaMarcaDTO } from "./dto/pesquisaMarca.dto";


@Controller('/marca')
export class PessoaController{ 

}