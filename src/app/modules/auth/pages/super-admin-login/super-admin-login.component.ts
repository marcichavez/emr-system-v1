import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-super-admin-login',
  templateUrl: './super-admin-login.component.html',
  styleUrls: ['./super-admin-login.component.scss'],
})
export class SuperAdminLoginComponent implements OnInit {
  loginForm:FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', Validators.required),
  });

  loginBtnLabel:string = 'Login';
  loginBtnDisabled:boolean = true;
  isPasswordVisible:boolean= false;
  constructor() {}

  ngOnInit(): void {}

  onInputChange(){
    this.loginBtnDisabled = !this.loginForm.valid
  }

  onSubmit() {
    this.loginBtnDisabled = true
    // Add api submission here
  }

}
