import { User } from './createAccount.interface';

export interface LoginResponse {
  user: User;
  token: string;
}
