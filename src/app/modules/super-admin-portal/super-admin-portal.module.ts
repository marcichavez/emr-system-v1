import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SuperAdminPortalRoutingModule } from './super-admin-portal-routing.module';
import { SuperAdminPortalComponent } from './super-admin-portal.component';

@NgModule({
  declarations: [SuperAdminPortalComponent],
  imports: [
    CommonModule,
    SuperAdminPortalRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
  ],
})
export class SuperAdminPortalModule {}
