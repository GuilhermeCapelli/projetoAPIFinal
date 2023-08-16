import { Injectable } from "@nestjs/common";
import { PessoaEntity } from "./pessoa.entity";

@Injectable()
export class PessoaArmazenado{
    #Pessoa: PessoaEntity[] = [];    

    AdicionarPessoa(Pessoa: PessoaEntity){
        this.#Pessoa.push(Pessoa);
    }

    get Pessoa(){        
        return this.#Pessoa;
    }

    private buscaPorID(id: string){
        const PossivelPessoa = this.#Pessoa.find(
            PessoaSalvo => PessoaSalvo.id === id
        );

        if(!PossivelPessoa){
            throw new Error('Pessoa não Encontrada');
        }

        return PossivelPessoa
    }

    async AtualizaPessoa(id: string, dadosAtualizacao: Partial<PessoaEntity>){
        const Pessoa = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave, valor]) => {
                if(chave=== 'id'){
                    return;
                }

                Pessoa[chave] = valor;
            }
        )

        return Pessoa;
    }

   async removePessoa(id: string){
        const Pessoa = this.buscaPorID(id);
        this.#Pessoa = this.#Pessoa.filter(
            PessoaSalvo => PessoaSalvo.id !== id
        )
        return this.Pessoa;
   }
}