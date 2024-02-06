import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SnackbarService } from 'src/app/shared/services/snackbar/snackbar.service';

@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {
  constructor(
    private _router: Router,
    private _snackbarService: SnackbarService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        let isServerError = false;
        if (err.statusText === 'Unknown Error') {
          isServerError = true;
          this._snackbarService.openErrorSnackbar(
            'No internet connection. Please check your internet connection and try again.',
          );
        } else if (err.status === 500) {
          isServerError = true;
          this._snackbarService.openErrorSnackbar(
            'Internal server error. Please try again later.',
          );

          console.error(err);
        } else if (
          !request.url.includes('login') &&
          (err.status === 401 || err.status === 403)
        ) {
          console.log(request);
          this._snackbarService.openErrorSnackbar(err.error.message);
          this._router.navigate(['/auth/login']);
        }

        return isServerError ? of(err) : throwError(err);
      }),
    );
  }
}
