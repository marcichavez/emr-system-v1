import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoadingSnackbarComponent } from './components/loading-snackbar/loading-snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openLoadingSnackbar(message: string) {
    return this.snackBar.openFromComponent(LoadingSnackbarComponent, {
      data: {
        message,
      },
    });
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
