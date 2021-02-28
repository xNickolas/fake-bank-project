import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { AuthService } from '../../shared/services/auth/auth.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private loginService: LoginService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.loginForm();
  }

  loginForm() {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  onSubmit(){
    if (!this.login.valid) {
      return;
    }
    this.logIn();
  }


  logIn() {
    this.loginService.logIn(this.login.value)
    .pipe(
      take(1),
    )
    .subscribe(
      response => this.onSucessLogin(),
      error => {
        console.log(error);
      }
    );
  }

  onSucessLogin() {
    this.router.navigate(['/#/dashboard/']);
  }

}
