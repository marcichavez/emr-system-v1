import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.scss'],
})
export class ErrorAlertComponent implements OnInit, OnChanges {
  @Input()
  serverErrorMessage!: string;

  @Output()
  serverErrorMessageChange: EventEmitter<string> = new EventEmitter<string>();

  serverErrorMessages: string[] = [];
  ngOnInit(): void {
    this.serverErrorMessages = this.serverErrorMessage.split(',');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.serverErrorMessages = this.serverErrorMessage.split(',');
  }

  onCloseClick() {
    this.serverErrorMessageChange.emit('');
  }
}
