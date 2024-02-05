import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginError } from 'src/app/core/interfaces/LoginError.interface';
import { LoginSucces } from 'src/app/core/interfaces/LoginSuccess.interface';
import { FakeAuthService } from 'src/app/core/mocks/fake-auth/fake-auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  logoSrc = '/assets/images/logo.jpg';

  constructor() {}

  ngOnInit(): void {}
}
