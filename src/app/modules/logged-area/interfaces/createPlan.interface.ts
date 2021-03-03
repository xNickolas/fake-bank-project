import { Login } from '../../site/interfaces/login.interface';

export interface CreatePlan  {
    login: Login;
    id?: number;
    padrao?: true;
    tipoMovimento: string;
    descricao: string;
}
