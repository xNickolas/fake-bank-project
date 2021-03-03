import { Plans } from './plans.interface';

export interface LancamentosResource {
  id: number;
  data: string;
  valor: number;
  conta: number;
  descricao: string;
  planoConta: Plans;
  tipo: string;
}
