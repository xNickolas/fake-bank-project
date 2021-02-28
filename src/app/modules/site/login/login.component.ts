import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  @ViewChild('userInput') userInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;

  user: string;
  password: string;

  estaCarregando: boolean;
  erroNoLogin: boolean;

  constructor(
    private router: Router
  ) { }

  onSubmit(form) {
    form.controls.user.markAsTouched();
    form.controls.password.markAsTouched();

    if (form.controls.user.invalid) {
      this.userInput.nativeElement.focus();
      return;
    }

    if (form.controls.password.invalid) {
      this.passwordInput.nativeElement.focus();
      return;
    }

    return;
  }

  onSuccessLogin() {
    this.router.navigate(['dashboard']);
  }

  onErrorLogin() {
    this.erroNoLogin = true;
  }

  exibeErro(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }

    return form.controls[nomeControle].invalid && form.controls[nomeControle].touched;
  }

}
