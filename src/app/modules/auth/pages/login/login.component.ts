import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FakeAuthService } from 'src/app/core/mocks/fake-auth/fake-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('test@email.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('test123', Validators.required),
  });

  loginBtnLabel = 'Login';
  loginBtnDisabled = false;
  isPasswordVisible = false;
  constructor(
    private router: Router,
    private authService: FakeAuthService,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.loginBtnLabel = 'Verifying Credentials...';
    this.loginBtnDisabled = true;
    let { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe(
      (res) => {
        this.loginBtnLabel = 'Entering Portal...';
        setTimeout(() => {
          // this.onSuccessLogin(res);
        }, 200);
      },
      (err) => {
        this.loginBtnLabel = 'Login';
        this.loginBtnDisabled = false;
        // this.onErrorLogin(err);
      },
    );
  }

  // onSuccessLogin(res) {
  //   localStorage.setItem('SESSION_TOKEN', res.session_token);
  //   localStorage.setItem('SESSION_AUTH', res.token);
  //   this.router.navigate(['portal']);
  // }

  // onErrorLogin(err) {
  //   this._snackBar.open(err.error.message || 'Something went wrong', 'Okay', {
  //     horizontalPosition: 'left',
  //     verticalPosition: 'bottom',
  //     duration: 3000,
  //   });
  // }

  onClickForgotPassword() {
    this.router.navigate(['auth', 'forgot-password']);
  }
}
