import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/modules/site/interfaces/createAccount.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  token: string;

  constructor(
    private router: Router,
  ) { }

  setUser(user: User){
    this.user = user;
    localStorage.setItem('usurario', JSON.stringify(user));
  }

  getUser() {
    if (this.user) {
      return this.user;
    }

    const savedUser = localStorage.getItem('usuario');

    if (savedUser) {
      this.user = JSON.parse(savedUser);
      return this.user;
    }

    return null;
  }

  setToken(token: any) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken() {
    if (this.token) {
      return this.token;
    }

    const savedToken = localStorage.getItem('token');

    if (savedToken) {
      this.token = savedToken;
      return this.token;
    }

    return null;
  }

  isLogged(): boolean {
    return this.getUser() && this.getToken() ? true : false;
    // if (this.getUser() && this.getToken()) {
    //   return true;
    // }

    // return false;
  }

  getNewPassword(){
    return localStorage.getItem('senhaTemporaria');
  }

  logOut() {
    this.user = null;
    this.token = null;
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
