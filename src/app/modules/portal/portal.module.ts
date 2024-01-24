import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { DrawerLeftComponent } from './components/drawer-left/drawer-left.component';
import { FormMaterialsModule } from 'src/app/shared/form-materials/form-materials.module';
import { AddPatientDrawerComponent } from './components/add-patient-drawer/add-patient-drawer.component';

@NgModule({
  declarations: [
    PortalComponent,
    HeaderComponent,
    DrawerLeftComponent,
    AddPatientDrawerComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    MatSidenavModule,
    FormMaterialsModule,
    MatToolbarModule,
  ],
})
export class PortalModule {}
