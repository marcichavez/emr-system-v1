import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogData,
} from './confirmation-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogService {
  constructor(private dialog: MatDialog) {}

  openConfirmationDialog(data: ConfirmationDialogData) {
    return this.dialog
      .open(ConfirmationDialogComponent, {
        disableClose: true,
        data,
      })
      .afterClosed();
  }
}
