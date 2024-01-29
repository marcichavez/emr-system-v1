import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientApiService } from 'src/app/core/api/patient-api/patient-api.service';
import { FAKE_PATIENTS } from 'src/app/core/mocks/data/patients';
import {
  objective,
  subjective,
} from 'src/app/shared/components/soap/soap.config';

@Component({
  selector: 'app-create-encounter',
  templateUrl: './create-encounter.component.html',
  styleUrls: ['./create-encounter.component.scss'],
})
export class CreateEncounterComponent implements OnInit {
  index = 2;
  summary = {
    patient: FAKE_PATIENTS[this.index],
    guardian: FAKE_PATIENTS[this.index].guardian,
  };
  payorList = ['Phic Pay', 'Patient Pay', 'Other Medical Insurance'];
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
  soap: any = {};

  constructor(private patientApi: PatientApiService) {}

  ngOnInit(): void {
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
    this.patientApi.getPatientByPIN('xxx').subscribe((res) => {
      console.log(res);
      this.summary = {
        patient: res,
        guardian: res.guardian,
      };
    });
  }
}
