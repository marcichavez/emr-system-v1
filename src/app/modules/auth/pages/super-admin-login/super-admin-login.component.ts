import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-super-admin-login',
  templateUrl: './super-admin-login.component.html',
  styleUrls: ['./super-admin-login.component.scss'],
})
export class SuperAdminLoginComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {}
}
