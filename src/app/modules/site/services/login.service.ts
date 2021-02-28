import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { AuthService } from '../../shared/services/auth/auth.service';
import { Login } from '../interfaces/login.interface';
import { LoginResponse } from '../interfaces/loginResponse.interface';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URL = environment.API_URL;

  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router,
  ) { }

  logIn(user: Login): Observable<LoginResponse> {
    // return this.http.post(this.API_URL + '/contatos/' + id, this.httpOptions);
      return this.http.post<LoginResponse>(this.API_URL + '/login', user)
      .pipe(
        delay(1000),
        tap( response => {
          this.authService.setUser(response.user);
          this.authService.setToken(response.token);
        })
      );
  }
}
