import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/api/auth/auth.service';
import { SnackbarService } from '@shared/components/snackbar/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('temp1@admin.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('Password123!', Validators.required),
  });

  loginBtnLabel = 'Login';
  isPasswordVisible = false;
  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBarService: SnackbarService,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.snackBarService.openLoadingSnackbar('Logging in...');
    this.loginForm.disable();
    const { email, password } = this.loginForm.getRawValue();

    this.authService.login(email, password).subscribe(
      () => {
        //put redirect here
        this.loginBtnLabel = 'Entering Portal...';
        this.router.navigate(['/portal']);
        this.snackBarService.closeLoadingSnackbar();
        this.snackBarService.openSuccessSnackbar('Successfully logged in');
      },
      (err: HttpErrorResponse) => {
        this.loginForm.enable();
        this.snackBarService.openErrorSnackbar(err.error.message);
      },
    );
  }

  onClickForgotPassword() {
    this.router.navigate(['auth', 'forgot-password']);
  }
}
