import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { FormMaterialsModule } from 'src/app/shared/modules/form-materials/form-materials.module';
import { AddPatientDrawerComponent } from './components/add-patient-drawer/add-patient-drawer.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PatientsListComponent } from './components/add-patient-drawer/components/patients-list/patients-list.component';
import { PatientFormComponent } from './components/add-patient-drawer/components/patient-form/patient-form.component';

@NgModule({
  declarations: [
    PortalComponent,
    HeaderComponent,
    NavigationBarComponent,
    AddPatientDrawerComponent,
    NavigationBarComponent,
    PatientsListComponent,
    PatientFormComponent,
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
