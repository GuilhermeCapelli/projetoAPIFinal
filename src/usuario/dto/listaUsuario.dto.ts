export class listaUsuarioDTO{
    constructor(
        readonly id:string,
        readonly nome: string,
        readonly idade: string,
        readonly cidade: string,
        readonly email: string,
        readonly telefone: string,
    ){}
}

