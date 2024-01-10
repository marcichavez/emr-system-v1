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
    age: new FormControl('', [Validators.required]),
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
  sexes = ['Male', 'Female'];

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

    this.healthProfileFG.get('dob')?.valueChanges.subscribe((o) => {
      var ageBreakdown = this.calculateAge(new Date(o));
      this.healthProfileFG.get('age')?.setValue(ageBreakdown.years);
      // if (ageBreakdown.years >= 21) {
      //   this.guardianProfileFG.reset();
      // }
    });

    this.guardianProfileFG.get('dob')?.valueChanges.subscribe((o) => {
      var ageBreakdown = this.calculateAge(new Date(o));
      this.guardianProfileFG.get('age')?.setValue(ageBreakdown.years);
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

  calculateAge(dob: Date) {
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    var yearNow = now.getFullYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();

    var yearDob = dob.getFullYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();

    var yearAge = yearNow - yearDob;

    if (monthNow >= monthDob) var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow - monthDob;
    }

    if (dateNow >= dateDob) var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var temp = new Date(yearNow, monthDob + 1, 1);
      temp.setDate(temp.getDate() - 1);
      var maxDate = temp.getDate();
      var dateAge = maxDate + dateNow - dateDob;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    return {
      years: yearAge,
      months: monthAge,
      days: dateAge,
    };
  }
}
