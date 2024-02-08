import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorSnackbarComponent } from './components/error-snackbar/error-snackbar.component';
import { LoadingSnackbarComponent } from './components/loading-snackbar/loading-snackbar.component';
import { SuccessSnackbarComponent } from './components/success-snackbar/success-snackbar.component';
import { SnackbarService } from './snackbar.service';

@NgModule({
  declarations: [
    LoadingSnackbarComponent,
    SuccessSnackbarComponent,
    ErrorSnackbarComponent,
  ],
  providers: [SnackbarService],
  imports: [MatSnackBarModule, MatProgressSpinnerModule, MatIconModule],
})
export class SnackbarModule {}
