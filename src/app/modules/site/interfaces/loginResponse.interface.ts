import { User } from './createAccount.interface';

export interface LoginResponse {
  usuario: User;
  token: string;
}
