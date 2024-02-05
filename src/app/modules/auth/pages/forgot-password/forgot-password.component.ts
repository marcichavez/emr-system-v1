import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeAuthService } from 'src/app/core/mocks/fake-auth/fake-auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });

  forgotPasswordBtnDisabled = false;
  forgotPasswordBtnLabel = 'Send Reset Link to my Email';
  linkSuccessSent = false;

  constructor(
    private authService: FakeAuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.authService
      .forgotPassword(this.forgotPasswordForm.value.email)
      .subscribe(
        (res) => {
          this.linkSuccessSent = true;
          console.log('Successfully sent reset password link');
        },
        (err) => {
          alert(
            err.error.message ||
              'Error sending the reset password link. Please try again later.',
          );
        },
      );
  }

  onClickBackToLoginBtn() {
    this.router.navigate(['auth', 'login']);
  }
}
