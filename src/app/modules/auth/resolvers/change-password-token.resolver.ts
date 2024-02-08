import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { AuthService } from '@core/api/auth/auth.service';
import { SnackbarService } from '@shared/components/snackbar/snackbar.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChangePasswordTokenResolver implements Resolve<boolean> {
  constructor(
    private router: Router,
    private authService: AuthService,
    private snackbarService: SnackbarService,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> {
    const token = route.paramMap.get('token');
    if (!token) {
      this.router.navigate(['auth', 'forgot-password']);
      return of(false);
    }

    return this.authService.verifyResetPasswordToken(token).pipe(
      map((response) => response.found),
      catchError((e) => {
        this.snackbarService.openErrorSnackbar(e.error.message);
        this.router.navigate(['auth', 'forgot-password']);
        return of(false);
      }),
    );
  }
}
