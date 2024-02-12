import { Component } from '@angular/core';
import { BaseSnackbarComponent } from '../../base-snackbar';

@Component({
  selector: 'app-loading-snackbar',
  templateUrl: './loading-snackbar.component.html',
  styleUrls: ['./loading-snackbar.component.scss'],
})
export class LoadingSnackbarComponent extends BaseSnackbarComponent<LoadingSnackbarComponent> {}
