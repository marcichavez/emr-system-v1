import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientEncounterRoutingModule } from './patient-encounter-routing.module';
import { PatientEncounterComponent } from './patient-encounter.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [PatientEncounterComponent],
  imports: [
    CommonModule,
    PatientEncounterRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    ComponentsModule,
  ],
})
export class PatientEncounterModule {}
