export class PessoaEntity{
    id: string;
    nome: string;
    endereco: string;
    telefone: string;
    nome_do_cachorro: string; 

    constructor(id:string,nome: string,endereco: string,telefone: string,nome_do_cachorro: string){
        this.id = id;
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.nome_do_cachorro = nome_do_cachorro;
    }

}