import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enroll-patient',
  templateUrl: './enroll-patient.component.html',
  styleUrls: ['./enroll-patient.component.scss'],
})
export class EnrollPatientComponent implements OnInit {
  healthProfileFG = new FormGroup({
    lastName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    middleName: new FormControl(''),
    suffix: new FormControl(''),
    sex: new FormControl(''),
    dob: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    contactNo: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    pin: new FormControl(''),
    // won't be saved on the actual db of the user
    encounter: new FormGroup({
      payor: new FormControl('', [Validators.required]),
      atc: new FormControl(''),
    }),
    guardian: new FormGroup({
      lastName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      middleName: new FormControl(''),
      suffix: new FormControl(''),
      sex: new FormControl(''),
      dob: new FormControl('', [Validators.required]),
      contactNo: new FormControl('', [Validators.required]),
      email: new FormControl(''),
      pin: new FormControl(''),
      address: new FormGroup({
        address1: new FormControl(''),
        brgy: new FormControl('', [Validators.required]),
        cityMun: new FormControl('', [Validators.required]),
        prov: new FormControl('', [Validators.required]),
        reg: new FormControl('', [Validators.required]),
      }),
    }),
    address: new FormGroup({
      address1: new FormControl(''),
      brgy: new FormControl('', [Validators.required]),
      cityMun: new FormControl('', [Validators.required]),
      prov: new FormControl('', [Validators.required]),
      reg: new FormControl('', [Validators.required]),
    }),
  });

  payorList = ['Phic Pay', 'Patient Pay', 'Other Medical Insurance'];

  reviewOfSystemsFG = new FormGroup({
    chiefComplaint: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {
    (this.healthProfileFG.get('encounter') as FormGroup)
      .get('payor')
      ?.valueChanges.subscribe((value) => {
        if (value === 'Phic Pay') {
          (this.healthProfileFG.get('encounter') as FormGroup)
            .get('atc')
            ?.setValidators([Validators.required]);
        }
      });
  }

  showForm() {
    console.log(this.healthProfileFG.value);
  }

  isClaimEligible() {}

  autofillPatient() {}

  autofillGuardian() {}
}
