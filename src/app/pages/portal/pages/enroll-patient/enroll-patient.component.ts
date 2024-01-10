import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhLocationService } from 'src/app/services/api/ph-location/ph-location.service';

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

    address: new FormGroup({
      address1: new FormControl(''),
      brgy: new FormControl('', [Validators.required]),
      cityMun: new FormControl('', [Validators.required]),
      prov: new FormControl('', [Validators.required]),
      reg: new FormControl('', [Validators.required]),
    }),
  });

  guardianProfileFG = new FormGroup({
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
  });

  payorList = ['Phic Pay', 'Patient Pay', 'Other Medical Insurance'];

  summary: any = {};

  constructor(private ph: PhLocationService) {
    ph.getBarangays().subscribe((o: any) => {
      console.log(o.length);
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('summary')) {
      this.summary = JSON.parse(localStorage.getItem('summary') || '{}');
      if (this.summary['profile']) {
        this.healthProfileFG.patchValue(this.summary['profile']);
      }

      if (this.summary['guardian']) {
        this.guardianProfileFG.patchValue(this.summary['guardian']);
      }
    }

    (this.healthProfileFG.get('encounter') as FormGroup)
      .get('payor')
      ?.valueChanges.subscribe((value) => {
        if (value === 'Phic Pay') {
          (this.healthProfileFG.get('encounter') as FormGroup)
            .get('atc')
            ?.setValidators([Validators.required]);
        }
      });

    this.healthProfileFG.valueChanges.subscribe((o) => {
      this.summary['profile'] = o;
      localStorage.setItem('summary', JSON.stringify(this.summary));
    });

    this.guardianProfileFG.valueChanges.subscribe((o) => {
      this.summary['guardian'] = o;
      localStorage.setItem('summary', JSON.stringify(this.summary));
    });
  }

  showForm() {
    console.log(this.summary);
  }

  isClaimEligible() {}

  autofillPatient() {}

  autofillGuardian() {}
}
