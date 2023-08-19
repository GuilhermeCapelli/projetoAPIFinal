import { Injectable } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuariosArmazenados{
    #USUARIO: UsuarioEntity[] = [];    

    AdicionarProduto(produto: UsuarioEntity){
        this.#USUARIO.push(USUARIO);
    }

    get Produtos(){        
        return this.#USUARIO;
    }

    

    private buscaPorID(id: string){
        const possivelProduto = this.#USUARIO.find(
            USUSALVO => USUSALVO.ID === id
        );

        if(!POSSIVELUSUARIO){
            throw new Error('Usuario não encontrado');
        }

        return POSSIVELUSUARIO
    }

    async ProdutosByID(id: string){
        const USUARIO = this.buscaPorID(id);
        return USUARIO;
    }

    async ProdutosByNome(nome: string){
        const produto = this.#USUARIO.filter(
            USUSALVO => USUSALVO.NOME.includes(nome)
        );

        if(!produto){
            throw new Error('Usuario não encontrado');
        }

        return produto;
    }



    async atualizausuario(id: string, dadosAtualizacao: Partial<USUARIO>){
        const USUARIO = this.buscaPorID(id);

        Object.entries(dadosAtualizacao).forEach(
            ([chave, valor]) => {
                if(chave=== 'id'){
                    return;
                }

                USUARIO[chave] = valor;
            }
        )

        return USUARIO;
    }

    async REMOVEUSUARIO(id: string){
        const USUARIO = this.buscaPorID(id);
        this.#USUARIO = this.#USUARIO.filter(
            prodSalvo => prodSalvo.ID !== id
        )
        return USUARIO;
    }

    
}