import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  openErrorSnackbar(message: string) {
    this._snackBar.open(message || 'Something went wrong', 'Okay', {
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      duration: 3000,
    });
  }
}
