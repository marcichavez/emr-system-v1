import { Component, Inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';
import { SnackbarData } from './snackbar.types';

@Component({
  template: '',
})
export class BaseSnackbarComponent<TSnackbar> {
  message: string;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA)
    private data: SnackbarData,
    private snackbarRef: MatSnackBarRef<TSnackbar>,
  ) {
    this.message = this.data.message;
  }

  closeClick() {
    this.snackbarRef.dismiss();
  }
}
