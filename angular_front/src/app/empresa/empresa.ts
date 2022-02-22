import { Timestamp } from "rxjs";
import { Cliente } from "../cliente/cliente";
import { Funcionario } from "../funcionario/funcionario";

export interface Empresa {
  id: number,
  nome: string,
  cnpj: string,
  endereco: string,
  created_at: Date,
  clientes: Cliente[],
  funcionarios: Funcionario[],

}
