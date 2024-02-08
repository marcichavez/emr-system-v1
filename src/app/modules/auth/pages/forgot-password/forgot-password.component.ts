import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/api/auth/auth.service';
import { SnackbarService } from '@shared/components/snackbar/snackbar.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });

  forgotPasswordBtnDisabled = false;
  forgotPasswordBtnLabel = 'Send Reset Link to my Email';
  linkSuccessSent = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {}

  onSubmit() {
    this.authService
      .forgotPassword(this.forgotPasswordForm.value.email)
      .subscribe(
        () => {
          this.linkSuccessSent = true;
          this.snackbarService.openSuccessSnackbar(
            'Reset link has been sent to your email.',
          );
        },
        (e) => {
          this.snackbarService.openErrorSnackbar(e.error.message);
        },
      );
  }

  onClickBackToLoginBtn() {
    this.router.navigate(['auth', 'login']);
  }
}
