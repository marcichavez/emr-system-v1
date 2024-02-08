import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { ErrorSnackbarComponent } from './components/error-snackbar/error-snackbar.component';
import { LoadingSnackbarComponent } from './components/loading-snackbar/loading-snackbar.component';
import { SuccessSnackbarComponent } from './components/success-snackbar/success-snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private _loadingSnackbarRef!: MatSnackBarRef<LoadingSnackbarComponent>;

  constructor(private snackBar: MatSnackBar) {}

  openLoadingSnackbar(message: string) {
    this._loadingSnackbarRef = this.snackBar.openFromComponent(
      LoadingSnackbarComponent,
      {
        data: {
          message,
        },
      },
    );

    return this._loadingSnackbarRef;
  }

  closeLoadingSnackbar() {
    this._loadingSnackbarRef.dismiss();
  }

  openSuccessSnackbar(message: string) {
    this._loadingSnackbarRef = this.snackBar.openFromComponent(
      SuccessSnackbarComponent,
      {
        panelClass: 'success-snackbar',
        duration: 3000,
        data: {
          message,
        },
      },
    );
  }

  openErrorSnackbar(message: string) {
    this._loadingSnackbarRef = this.snackBar.openFromComponent(
      ErrorSnackbarComponent,
      {
        panelClass: 'error-snackbar',
        duration: 3000,
        data: {
          message: message || 'Something went wrong',
        },
      },
    );
  }
}
