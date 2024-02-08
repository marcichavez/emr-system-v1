import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from '@shared/components/snackbar/snackbar.service';

import { of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiErrorInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private snackbarService: SnackbarService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): any {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        let isServerError = false;
        if (err.statusText === 'Unknown Error') {
          isServerError = true;
          this.snackbarService.openErrorSnackbar(
            'No internet connection. Please check your internet connection and try again.',
          );
        } else if (err.status === 500) {
          isServerError = true;
          this.snackbarService.openErrorSnackbar(
            'Internal server error. Please contact the administrator.',
          );

          console.error(err);
        } else if (
          !request.url.includes('login') &&
          (err.status === 401 || err.status === 403)
        ) {
          this.snackbarService.openErrorSnackbar(err.error.message);
          if (this.router.url.includes('portal')) {
            this.router.navigate(['/auth/login']);
          }
        }

        return isServerError ? of(err) : throwError(err);
      }),
    );
  }
}
