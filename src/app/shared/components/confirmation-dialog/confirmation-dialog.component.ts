import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ConfirmationDialogData {
  title: string;
  message: string;
  cancelText?: string;
  confirmText?: string;
}

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData,
    private dialogRef: MatDialogRef<ConfirmationDialogComponent>,
  ) {}

  onConfirmClick() {
    this.dialogRef.close(true);
  }
}
