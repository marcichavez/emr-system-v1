import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormMaterialsModule } from 'src/app/shared/form-materials/form-materials.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    FormMaterialsModule,
  ],
})
export class LoginModule {}
