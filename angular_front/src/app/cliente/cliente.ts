import { Timestamp } from "rxjs";

export interface Cliente {
  id: number,
  nome: string,
  login: string,
  cpf: string,
  endereco: string,
  created_at: Date,
  senha: string
}
