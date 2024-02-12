import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./modules/home/home.module').then((m) => m.HomeModule),
  // },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'super-admin/portal',
    loadChildren: () =>
      import('./modules/super-admin-portal/super-admin-portal.module').then(
        (m) => m.SuperAdminPortalModule,
      ),
  },
  {
    path: 'portal',
    loadChildren: () =>
      import('./modules/portal/portal.module').then((m) => m.PortalModule),
  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
