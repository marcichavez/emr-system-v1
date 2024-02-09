import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@modules/auth/guards/auth.guard';
import { PortalComponent } from './portal.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'patients-masterlist',
        pathMatch: 'full',
      },
      {
        path: 'patients-masterlist',
        loadChildren: () =>
          import('./pages/patients-masterlist/patients-masterlist.module').then(
            (m) => m.PatientsMasterlistModule,
          ),
      },
      {
        path: 'appointments',
        loadChildren: () =>
          import('./pages/appointments/appointments.module').then(
            (m) => m.AppointmentsModule,
          ),
      },
      {
        path: 'employees',
        loadChildren: () =>
          import('./pages/employees/employees.module').then(
            (m) => m.EmployeesModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
