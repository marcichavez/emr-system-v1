import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsMasterlistComponent } from './patients-masterlist.component';

const routes: Routes = [{ path: '', component: PatientsMasterlistComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsMasterlistRoutingModule {}
