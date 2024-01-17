import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  logoSrc = '/assets/images/logo.jpg';
  loginForm = new FormGroup({
    email: new FormControl('sample@gmail.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('password123', Validators.required),
  });

  loginBtnLabel = 'Login';
  loginBtnDisabled = false;
  isPasswordVisible = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    // handle form submission
    this.loginBtnLabel = 'Validating...';
    this.loginBtnDisabled = true;

    // mock login
    setTimeout(() => {
      this.loginBtnLabel = 'Login...';
      this.loginBtnDisabled = false;
      this.router.navigate(['portal/dashboard']);
    }, 3000);
  }

  onForgotPassword() {
    // handle form submission
  }
}
