import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, AuthRoutingModule, MatDividerModule],
})
export class AuthModule {}
