import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
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
      {
        path: 'settings',
        loadChildren: () =>
          import('./pages/settings/settings.module').then(
            (m) => m.SettingsModule,
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
