import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientEncounterComponent } from './patient-encounter.component';

const routes: Routes = [
  {
    path: '',
    component: PatientEncounterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientEncounterRoutingModule {}
