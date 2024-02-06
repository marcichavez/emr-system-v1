import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/core/api/auth/auth.service';

@Component({
  selector: 'app-super-admin-login',
  templateUrl: './super-admin-login.component.html',
  styleUrls: ['./super-admin-login.component.scss'],
})
export class SuperAdminLoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  loginBtnLabel: string = 'Login';
  loginBtnDisabled: boolean = true;
  isPasswordVisible: boolean = false;
  constructor(
    private authService: AuthService,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {}

  onInputChange() {
    this.loginBtnDisabled = !this.loginForm.valid;
  }

  onSubmit() {
    this.loginBtnDisabled = true;

    // Add api submission here
    const { email, password } = this.loginForm.getRawValue();

    this.authService.superAdminLogin(email, password).subscribe(
      (response) => {},
      (err: HttpErrorResponse) => {
        this._snackBar.open(
          err.error.message || 'Something went wrong',
          'Okay',
          {
            horizontalPosition: 'left',
            verticalPosition: 'bottom',
            duration: 3000,
          },
        );
      },
    );
  }
}
