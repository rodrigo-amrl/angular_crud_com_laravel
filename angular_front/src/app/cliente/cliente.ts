import { Timestamp } from "rxjs";
import { Empresa } from "../empresa/empresa";

export interface Cliente {
  id: number,
  nome: string,
  login: string,
  cpf: string,
  endereco: string,
  created_at: Date,
  senha: string,
  empresas: Empresa[]
}
