import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminPortalComponent } from './super-admin-portal.component';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminPortalComponent,
    children: [
      {
        path: '',
        redirectTo: 'tenants',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule,
          ),
      },
      {
        path: 'tenants',
        loadChildren: () =>
          import('./pages/tenants/tenants.module').then((m) => m.TenantsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdminPortalRoutingModule {}
