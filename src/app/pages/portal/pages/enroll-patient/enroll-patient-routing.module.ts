import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollPatientComponent } from './enroll-patient.component';

const routes: Routes = [
  {
    path: '',
    component: EnrollPatientComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnrollPatientRoutingModule {}
