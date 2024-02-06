import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackbarService } from './services/snackbar/snackbar.service';

@NgModule({
  declarations: [],
  providers: [SnackbarService],
  imports: [MatSnackBarModule],
})
export class SharedModule {}
