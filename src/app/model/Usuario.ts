import { Postagem } from "./postagem"

export class Usuario{

    public id: number

    public nome: string

    public usuario: string

    public senha: string

    public token: string

    public foto: string

    public postagem: Postagem[]

    // postagem vai entrar depois quando criar a model de postagem
}