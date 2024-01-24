import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FakeAuthService } from 'src/app/core/mocks/fake-auth/fake-auth.service';

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

  forgotPasswordBtnDisabled = true;
  forgotPasswordBtnLabel = 'Submit New Password';

  constructor(
    private authService: FakeAuthService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.forgotPasswordForm.valueChanges.subscribe((res) => {
      let { newPassword, confirmPassword } = res;
      this.forgotPasswordBtnDisabled = !this.authService.isPasswordConfirmed(
        newPassword,
        confirmPassword
      );
    });
  }

  onSubmit() {
    let { newPassword, confirmPassword } = this.forgotPasswordForm.value;
    this.forgotPasswordBtnDisabled = true;
    this.authService
      .resetPassword('1235', newPassword, confirmPassword)
      .subscribe(
        (res) => {
          this.snackbar
            .open('Password Successfully Change!', 'Okay', {
              horizontalPosition: 'left',
              verticalPosition: 'bottom',
            })
            .afterDismissed()
            .subscribe(() => {
              this.router.navigate(['auth', 'login']);
            });
        },
        (err) => {
          this.forgotPasswordBtnDisabled = false;
          alert(
            err.error.message ||
              'Something went wrong while changin your password. Please try again later.'
          );
        }
      );
  }

  onClickBackToLoginBtn() {
    this.router.navigate(['auth', 'login']);
  }
}
