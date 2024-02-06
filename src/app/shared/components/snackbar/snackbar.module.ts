import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingSnackbarComponent } from './components/loading-snackbar/loading-snackbar.component';
import { SnackbarService } from './snackbar.service';

@NgModule({
  declarations: [LoadingSnackbarComponent],
  providers: [SnackbarService],
  imports: [MatSnackBarModule, MatProgressSpinnerModule, MatIconModule],
})
export class SnackbarModule {}
