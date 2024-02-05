import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientApiService } from 'src/app/core/api/patient-api/patient-api.service';
import { FAKE_PATIENTS } from 'src/app/core/mocks/data/patients';
import * as SubFG from 'src/app/shared/components/soap/soap.config-fg';
import * as LIST from 'src/app/shared/components/soap/soap.list';

import {
  objective,
  subjective,
} from 'src/app/shared/components/soap/soap.config';
import { FormHelperService } from 'src/app/core/helpers/form-helper/form-helper.service';
import { PAYOR_TYPES } from 'src/app/core/constants/PAYORS.constant';
import { Soap } from 'src/app/core/interfaces/Soap.interface';
import { SoapParameters } from 'src/app/core/interfaces/SoapParameters.interface';
import { CalculatorService } from 'src/app/core/helpers/calculator/calculator.service';

@Component({
  selector: 'app-create-encounter',
  templateUrl: './create-encounter.component.html',
  styleUrls: ['./create-encounter.component.scss'],
})
export class CreateEncounterComponent implements OnInit {
  // to delete //
  index = 2;
  summary = {
    patient: FAKE_PATIENTS[this.index],
    guardian: FAKE_PATIENTS[this.index].guardian,
  };
  // end ---   //
  payorList = PAYOR_TYPES;
  form = new FormGroup({
    encounter: new FormGroup({
      payor: new FormControl('', [Validators.required]),
      atc: new FormControl(''),
      pin: new FormControl(this.summary.patient.pin),
      date: new FormControl(new Date()),
    }),
    subjective: subjective,
    objective: objective,
  });
  subjective = this.form.get('subjective') as FormGroup;
  objective = this.form.get('objective') as FormGroup;
  encounter = this.form.get('encounter') as FormGroup;
  soap: Soap = {};
  parameters: SoapParameters = {
    sex: '',
    age: { years: 0, months: 0, days: 0 },
    encounter: {
      payor: '',
      atc: '',
    },
  };
  selectedPanel = 'Clinical Notes';

  constructor(
    private patientApi: PatientApiService,
    private formHelper: FormHelperService,
    private calculator: CalculatorService,
  ) {
    if (localStorage.getItem('draftSoap')) {
      this.soap = JSON.parse(localStorage.getItem('draftSoap') || '{}');
      this.formHelper.SubFG = SubFG;
      this.formHelper.autofillForm(this.soap, this.form, LIST.formArrays);
    }

    this.form.valueChanges.subscribe((o) => {
      localStorage.setItem('draftSoap', JSON.stringify(o));
    });
    this.soap['patientId'] = FAKE_PATIENTS[this.index];
    this.initiateParameters();
  }

  initiateParameters() {
    this.parameters.age = this.calculator.ageBreakdown(
      new Date(this.summary.patient.dob),
    );
    this.parameters.sex = this.summary.patient.sex;
  }

  selectPanel(panelName: string) {
    this.selectedPanel = panelName;
  }

  ngOnInit(): void {
    console.log('this');
    this.encounter.get('payor')?.valueChanges.subscribe((value) => {
      if (value === 'Phic Pay') {
        this.encounter.get('atc')?.setValidators([Validators.required]);
      }
    });

    this.encounter.valueChanges.subscribe((res) => {
      this.soap['encounter'] = res;
    });

    this.subjective.valueChanges.subscribe((res) => {
      this.soap['subjective'] = res;
    });

    this.objective.valueChanges.subscribe((res) => {
      this.soap['objective'] = res;
    });
  }

  show() {
    console.log(this.form);
  }

  autofillPatient() {
    if (this.index == 2) this.index = 3;
    else this.index = 2;
    this.patientApi.getPatientByPIN('xxx', this.index).subscribe((res) => {
      console.log(res);
      this.summary = {
        patient: res,
        guardian: res.guardian,
      };
      this.initiateParameters();
    });
  }
}
