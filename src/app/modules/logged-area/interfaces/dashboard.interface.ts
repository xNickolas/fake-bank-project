import { LancamentosResource } from './lancamentosResource.interface';

export interface Dashboard {
  contaBanco: {
    saldo: number;
    id: number;
    lancamentos: LancamentosResource;
  };
  contaCredito: {
    saldo: number;
    id: number;
    lancamentos: LancamentosResource;
  };
}
