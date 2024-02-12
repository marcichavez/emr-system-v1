import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@core/api/auth/auth.service';
import { USER_TYPE } from '@core/constants/USER_TYPE.constant';
import { selectUser } from '@core/states/user';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store,
  ) {}

  canActivate() {
    const auth = localStorage.getItem('auth');

    if (!auth) {
      return true;
    }

    return this.store.select(selectUser).pipe(
      switchMap((user) => {
        if (user) {
          this._redirectUserToPortalByUserType(user.userType);
          return of(false);
        }

        return this.authService.me().pipe(
          map((response) => {
            this._redirectUserToPortalByUserType(response.userType);
            return false;
          }),
          catchError(() => {
            localStorage.removeItem('auth');
            return of(true);
          }),
        );
      }),
    );
  }

  private _redirectUserToPortalByUserType(userType: USER_TYPE) {
    if (userType === USER_TYPE.SUPER_ADMIN) {
      this.router.navigate(['super-admin/portal']);
    } else {
      this.router.navigate(['portal']);
    }
  }
}
