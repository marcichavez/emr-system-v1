import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@core/api/auth/auth.service';
import { USER_TYPE } from '@core/constants/USER_TYPE.constant';
import { selectUser } from '@core/states/user';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SuperAdminAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store,
  ) {}

  canActivate() {
    const auth = localStorage.getItem('auth');

    if (!auth) {
      this.router.navigate(['auth/login']);
      return false;
    }

    return this.store.select(selectUser).pipe(
      switchMap((user) => {
        if (user) {
          if (user.userType !== USER_TYPE.SUPER_ADMIN) {
            this.router.navigate(['portal']);
            return of(false);
          }
          return of(true);
        }

        return this.authService.me().pipe(
          map((response) => {
            if (response.userType !== USER_TYPE.SUPER_ADMIN) {
              this.router.navigate(['portal']);
              return false;
            }
            return true;
          }),
        );
      }),
    );
  }
}
