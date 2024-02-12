import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/api/auth/auth.service';
import { SnackbarService } from '@shared/components/snackbar/snackbar.service';

@Component({
  selector: 'app-super-admin-login',
  templateUrl: './super-admin-login.component.html',
  styleUrls: ['./super-admin-login.component.scss'],
})
export class SuperAdminLoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('admin@admin.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('Password123!', Validators.required),
  });

  loginBtnLabel: string = 'Login';
  loginBtnDisabled: boolean = true;
  isPasswordVisible: boolean = false;
  constructor(
    private authService: AuthService,
    private snackBarService: SnackbarService,
    private router: Router,
  ) {}

  onInputChange() {
    this.loginBtnDisabled = !this.loginForm.valid;
  }

  onSubmit() {
    this.loginBtnDisabled = true;
    const { email, password } = this.loginForm.getRawValue();

    this.authService.superAdminLogin(email, password).subscribe(
      () => {
        //put redirect here
        this.loginBtnLabel = 'Entering Portal...';
        this.router.navigate(['/super-admin/portal']);
      },
      (err: HttpErrorResponse) => {
        this.snackBarService.openErrorSnackbar(err.error.message);
      },
    );
  }
}
