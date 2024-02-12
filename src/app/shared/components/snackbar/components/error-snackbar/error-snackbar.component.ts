import { Component } from '@angular/core';
import { BaseSnackbarComponent } from '../../base-snackbar';

@Component({
  selector: 'app-error-snackbar',
  templateUrl: './error-snackbar.component.html',
  styleUrls: ['./error-snackbar.component.scss'],
})
export class ErrorSnackbarComponent extends BaseSnackbarComponent<ErrorSnackbarComponent> {}
