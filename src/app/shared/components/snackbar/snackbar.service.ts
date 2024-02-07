import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { LoadingSnackbarComponent } from './components/loading-snackbar/loading-snackbar.component';

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
    this.snackBar.open(message, 'Okay', {
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      duration: 3000,
    });
  }

  openErrorSnackbar(message: string) {
    this.snackBar.open(message || 'Something went wrong', 'Okay', {
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      duration: 3000,
    });
  }
}
