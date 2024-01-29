import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { FormMaterialsModule } from 'src/app/shared/modules/form-materials/form-materials.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { CreateEncounterComponent } from './components/create-encounter/create-encounter.component';
import { MatDialogModule } from '@angular/material/dialog';
import { SoapModule } from 'src/app/shared/components/soap/soap.module';
import { MatStepperModule } from '@angular/material/stepper';
import { SummaryModule } from 'src/app/shared/components/summary/summary.module';
import { ClinicalNotesModule } from 'src/app/shared/components/clinical-notes/clinical-notes.module';

@NgModule({
  declarations: [AppointmentsComponent, CreateEncounterComponent],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    FormMaterialsModule,
    TableModule,
    SoapModule,
    MatDialogModule,
    MatStepperModule,
    SummaryModule,
    ClinicalNotesModule,
  ],
})
export class AppointmentsModule {}
