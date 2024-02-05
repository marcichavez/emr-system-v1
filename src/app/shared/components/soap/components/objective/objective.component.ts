import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import * as LIST from '../../soap.list';
import { objective } from '../../soap.config';
import { SoapParameters } from 'src/app/core/interfaces/SoapParameters.interface';

@Component({
  selector: 'app-objective',
  templateUrl: './objective.component.html',
  styleUrls: ['./objective.component.scss'],
})
export class ObjectiveComponent implements OnInit {
  LIST = LIST;
  @Input() parameters: SoapParameters = {
    sex: '',
    age: { years: 0, months: 0, days: 0 },
    encounter: {
      payor: '',
      atc: '',
    },
  };
  @Input() form = objective;
  per_system_report_fg = this.form.get('per_system_report');
  anthropometrics_fg = this.form.get('anthropometrics');

  constructor() {
    console.log(this.form);
  }

  ngOnInit(): void {
    this.anthropometrics_fg?.get('height')?.valueChanges.subscribe((h) => {
      var w = this.anthropometrics_fg?.get('weight')?.value;
      if (w && h)
        this.anthropometrics_fg?.get('bmi')?.setValue(this.calculateBMI(h, w));
    });
    this.anthropometrics_fg?.get('weight')?.valueChanges.subscribe((w) => {
      var h = this.anthropometrics_fg?.get('height')?.value;
      if (h && w)
        this.anthropometrics_fg?.get('bmi')?.setValue(this.calculateBMI(h, w));
    });
  }

  updatePerSystemReport(fcname: string, value: string) {
    var fa = this.per_system_report_fg?.get(fcname) as FormArray;
    var index = fa.value.findIndex((o: string) => o == value);
    if (index > -1) fa.removeAt(index);
    else fa.push(new FormControl(value));
  }

  // h is in meters
  // w is in kg
  calculateBMI(h: number, w: number) {
    return parseFloat((w / h ** 2).toFixed(4));
  }
}
