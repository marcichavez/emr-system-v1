import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@core/api/auth/auth.service';
import { SnackbarService } from '@shared/components/snackbar/snackbar.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  isVisible = {
    newPassword: false,
    confirmPassword: false,
  };

  forgotPasswordForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  serverErrorMessage = '';

  forgotPasswordBtnDisabled = true;
  forgotPasswordBtnLabel = 'Submit New Password';
  token: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackbarService: SnackbarService,
  ) {
    this.token = this.activatedRoute.snapshot.paramMap.get('token') || '';
  }

  ngOnInit(): void {
    this.forgotPasswordForm.valueChanges.subscribe((values) => {
      const { newPassword, confirmPassword } = values;
      this.forgotPasswordBtnDisabled = newPassword !== confirmPassword;
    });
  }

  onSubmit() {
    const payload = {
      token: this.token,
      password: this.forgotPasswordForm.value.newPassword,
    };
    this.forgotPasswordBtnDisabled = true;

    this.snackbarService.openLoadingSnackbar('Changing your password...');
    this.authService.resetPassword(payload).subscribe(
      () => {
        this.snackbarService.openSuccessSnackbar(
          'You have changed your password successfully. Please login.',
        );
        this.router.navigate(['auth', 'login']);
      },
      (err) => {
        this.forgotPasswordBtnDisabled = false;
        if (err.status === 401) {
          this.router.navigate(['auth', 'forgot-password']);
          this.snackbarService.openErrorSnackbar(err.error.message);
        } else {
          this.serverErrorMessage = err.error.message;
          this.snackbarService.openErrorSnackbar(
            'Failed to reset password. Please check the form and try again.',
          );
        }
      },
    );
  }

  onClickBackToLoginBtn() {
    this.router.navigate(['auth', 'login']);
  }
}
