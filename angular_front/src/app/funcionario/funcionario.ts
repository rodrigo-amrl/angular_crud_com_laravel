import { Timestamp } from "rxjs";

export interface Funcionario {
  id: number,
  nome: string,
  login: string,
  cpf: string,
  endereco: string,
  created_at: Date,
  senha: string
}
