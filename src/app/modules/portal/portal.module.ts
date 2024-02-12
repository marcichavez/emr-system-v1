import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';

import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SummaryModule } from 'src/app/shared/components/summary/summary.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { FormMaterialsModule } from 'src/app/shared/modules/form-materials/form-materials.module';
import { AddPatientDrawerComponent } from './components/add-patient-drawer/add-patient-drawer.component';
import { S1CheckMasterlistComponent } from './components/add-patient-drawer/components/patient-form/components/s1-check-masterlist/s1-check-masterlist.component';
import { S2PatientDetailsComponent } from './components/add-patient-drawer/components/patient-form/components/s2-patient-details/s2-patient-details.component';
import { S4SummaryComponent } from './components/add-patient-drawer/components/patient-form/components/s4-summary/s4-summary.component';
import { PatientFormComponent } from './components/add-patient-drawer/components/patient-form/patient-form.component';
import { PatientsListComponent } from './components/add-patient-drawer/components/patients-list/patients-list.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    PortalComponent,
    HeaderComponent,
    NavigationBarComponent,
    AddPatientDrawerComponent,
    NavigationBarComponent,
    PatientsListComponent,
    PatientFormComponent,
    S1CheckMasterlistComponent,
    S2PatientDetailsComponent,
    S4SummaryComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    MatSidenavModule,
    FormMaterialsModule,
    MatToolbarModule,
    MatTabsModule,
    TableModule,
    MatCardModule,
    MatStepperModule,
    SummaryModule,
    MatMenuModule,
  ],
})
export class PortalModule {}
