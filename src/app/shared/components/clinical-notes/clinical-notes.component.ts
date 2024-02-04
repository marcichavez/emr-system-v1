import { Component, Input, OnInit } from '@angular/core';
import { SoapParameters } from 'src/app/core/interfaces/SoapParameters.interface';
import { NOTES } from './clinical-notes.config';

@Component({
  selector: 'app-clinical-notes',
  templateUrl: './clinical-notes.component.html',
  styleUrls: ['./clinical-notes.component.scss'],
})
export class ClinicalNotesComponent implements OnInit {
  @Input() soap: any;
  @Input() parameters: SoapParameters = {
    sex: '',
    age: { years: 0, months: 0, days: 0 },
    encounter: {
      payor: '',
      atc: '',
    },
  };
  @Input() notes: any = NOTES;
  constructor() {}

  ngOnInit(): void {}
}
