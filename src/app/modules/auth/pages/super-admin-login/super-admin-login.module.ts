import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormMaterialsModule } from 'src/app/shared/modules/form-materials/form-materials.module';
import { SuperAdminLoginRoutingModule } from './super-admin-login-routing.module';
import { SuperAdminLoginComponent } from './super-admin-login.component';

@NgModule({
  declarations: [SuperAdminLoginComponent],
  imports: [
    CommonModule,
    SuperAdminLoginRoutingModule,
    FormMaterialsModule,
    MatSnackBarModule,
  ],
})
export class SuperAdminLoginModule {}
