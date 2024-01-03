import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      // sidebar links
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'patients',
        loadChildren: () =>
          import('./pages/patients/patients.module').then(
            (m) => m.PatientsModule
          ),
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./pages/calendar/calendar.module').then(
            (m) => m.CalendarModule
          ),
      },
      // header links
      {
        path: 'enroll-patient',
        loadChildren: () =>
          import('./pages/enroll-patient/enroll-patient.module').then(
            (m) => m.EnrollPatientModule
          ),
      },
      {
        path: 'patient-encounter/:id',
        loadChildren: () =>
          import('./pages/patient-encounter/patient-encounter.module').then(
            (m) => m.PatientEncounterModule
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
