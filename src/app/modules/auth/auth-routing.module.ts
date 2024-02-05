import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('./pages/forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule,
          ),
      },
      {
        path: 'change-password/:token',
        loadChildren: () =>
          import('./pages/change-password/change-password.module').then(
            (m) => m.ChangePasswordModule,
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
