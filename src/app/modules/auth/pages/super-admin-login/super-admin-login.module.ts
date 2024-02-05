import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminLoginRoutingModule } from './super-admin-login-routing.module';
import { SuperAdminLoginComponent } from './super-admin-login.component';
import { FormMaterialsModule } from 'src/app/shared/modules/form-materials/form-materials.module';

@NgModule({
  declarations: [SuperAdminLoginComponent],
  imports: [CommonModule, SuperAdminLoginRoutingModule, FormMaterialsModule],
})
export class SuperAdminLoginModule {}
