import { IsEmail, IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";


export class RetornoCadastroDTO{
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    message: string;
}

export class RetornoObjDTO{
    return: any;
    message: string;
}