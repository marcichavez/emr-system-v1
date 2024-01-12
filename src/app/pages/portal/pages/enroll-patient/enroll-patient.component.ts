import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PhLocationService } from 'src/app/services/api/ph-location/ph-location.service';

@Component({
  selector: 'app-enroll-patient',
  templateUrl: './enroll-patient.component.html',
  styleUrls: ['./enroll-patient.component.scss'],
})
export class EnrollPatientComponent implements OnInit {
  regions: any[] = [];
  provinces: any[] = [];
  citymuns: any[] = [];
  barangays: any[] = [];

  g_provinces: any[] = [];
  g_citymuns: any[] = [];
  g_barangays: any[] = [];

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
      brgy: new FormControl(''),
      cityMun: new FormControl(''),
      prov: new FormControl(''),
      reg: new FormControl(''),
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
      brgy: new FormControl(''),
      cityMun: new FormControl(''),
      prov: new FormControl(''),
      reg: new FormControl(''),
    }),
  });

  payorList = ['Phic Pay', 'Patient Pay', 'Other Medical Insurance'];
  sexes = ['Male', 'Female'];

  summary: any = {};

  constructor(private ph: PhLocationService) {
    ph.getRegions().subscribe((o: any) => {
      this.regions = o;
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
    });

    var address = this.healthProfileFG.get('address');

    address?.get('reg')?.valueChanges.subscribe((o) => {
      if (!o) return;
      address?.get('prov')?.reset();
      address?.get('cityMun')?.reset();
      address?.get('brgy')?.reset();
      this.ph.getProvince().subscribe((provs: any) => {
        this.provinces = provs.filter((f: any) => f.reg_code === o.reg_code);
      });
    });

    address?.get('prov')?.valueChanges.subscribe((o) => {
      if (!o) return;
      address?.get('cityMun')?.reset();
      address?.get('brgy')?.reset();
      this.ph.getCityMuns().subscribe((citymuns: any) => {
        console.log({ citymuns });
        this.citymuns = citymuns.filter(
          (f: any) => f.prov_code === o.prov_code
        );
      });
    });

    address?.get('cityMun')?.valueChanges.subscribe((o) => {
      if (!o) return;
      address?.get('brgy')?.reset();
      this.ph.getBarangays().subscribe((brgys: any) => {
        console.log(brgys);
        this.barangays = brgys.filter((f: any) => f.mun_code === o.mun_code);
      });
    });

    var addressGuardian = this.guardianProfileFG.get('address');

    addressGuardian?.get('reg')?.valueChanges.subscribe((o) => {
      if (!o) return;
      addressGuardian?.get('prov')?.reset();
      addressGuardian?.get('cityMun')?.reset();
      addressGuardian?.get('brgy')?.reset();
      this.ph.getProvince().subscribe((provs: any) => {
        this.g_provinces = provs.filter((f: any) => f.reg_code === o.reg_code);
      });
    });

    addressGuardian?.get('prov')?.valueChanges.subscribe((o) => {
      if (!o) return;
      addressGuardian?.get('cityMun')?.reset();
      addressGuardian?.get('brgy')?.reset();
      this.ph.getCityMuns().subscribe((citymuns: any) => {
        console.log({ citymuns });
        this.g_citymuns = citymuns.filter(
          (f: any) => f.prov_code === o.prov_code
        );
      });
    });

    addressGuardian?.get('cityMun')?.valueChanges.subscribe((o) => {
      if (!o) return;
      addressGuardian?.get('brgy')?.reset();
      this.ph.getBarangays().subscribe((brgys: any) => {
        console.log(brgys);
        this.g_barangays = brgys.filter((f: any) => f.mun_code === o.mun_code);
      });
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

  displayFn(ph_location: any): string {
    return ph_location && ph_location.name ? ph_location.name : '';
  }
}
