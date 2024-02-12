import { Component } from '@angular/core';
import { BaseSnackbarComponent } from '../../base-snackbar';

@Component({
  selector: 'app-success-snackbar',
  templateUrl: './success-snackbar.component.html',
  styleUrls: ['./success-snackbar.component.scss'],
})
export class SuccessSnackbarComponent extends BaseSnackbarComponent<SuccessSnackbarComponent> {}
