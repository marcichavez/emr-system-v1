import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormMaterialsModule } from 'src/app/shared/modules/form-materials/form-materials.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatSnackBarModule,
    FormMaterialsModule,
  ],
})
export class LoginModule {}
