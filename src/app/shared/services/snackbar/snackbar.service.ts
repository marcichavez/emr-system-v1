import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  openErrorSnackbar(message: string) {
    this.snackBar.open(message || 'Something went wrong', 'Okay', {
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      duration: 3000,
    });
  }
}
