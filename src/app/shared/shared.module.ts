import { NgModule } from '@angular/core';
import { ConfirmationDialogModule } from './components/confirmation-dialog/confirmation-dialog.module';
import { ErrorAlertModule } from './components/error-alert/error-alert.module';
import { SnackbarModule } from './components/snackbar/snackbar.module';

@NgModule({
  declarations: [],
  providers: [],
  imports: [SnackbarModule, ErrorAlertModule, ConfirmationDialogModule],
  exports: [ErrorAlertModule],
})
export class SharedModule {}
