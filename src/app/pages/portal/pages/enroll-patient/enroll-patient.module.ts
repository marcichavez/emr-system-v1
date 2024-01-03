import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollPatientRoutingModule } from './enroll-patient-routing.module';
import { EnrollPatientComponent } from './enroll-patient.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EnrollPatientComponent],
  imports: [
    CommonModule,
    EnrollPatientRoutingModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class EnrollPatientModule {}
