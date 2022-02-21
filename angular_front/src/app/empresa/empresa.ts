import { Timestamp } from "rxjs";

export interface Empresa {
  id: number,
  nome: string,
  cnpj: string,
  endereco: string,
  created_at: Date,
}
