import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { S1CheckMasterlistComponent } from './components/s1-check-masterlist/s1-check-masterlist.component';
import { MatStepper } from '@angular/material/stepper';
import { LocationHelperService } from 'src/app/core/helpers/location-helper/location-helper.service';
import { PatientApiService } from 'src/app/core/api/patient-api/patient-api.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss'],
})
export class PatientFormComponent implements OnInit {
  @ViewChild(S1CheckMasterlistComponent)
  masterlistComponent!: S1CheckMasterlistComponent;

  @ViewChild('stepper') stepper!: MatStepper;
  checkMasterlistForm = new FormGroup({
    pin: new FormControl('123456789'),
  });

  patientForm = new FormGroup({
    lastName: new FormControl('Chavez', [Validators.required]),
    firstName: new FormControl('Marciliano', [Validators.required]),
    middleName: new FormControl('Sontillano'),
    suffix: new FormControl('III'),
    sex: new FormControl('Male'),
    dob: new FormControl(new Date(1995, 7, 13), [Validators.required]),
    age: new FormControl(20, [Validators.required]),
    contactNo: new FormControl('09051349281', [Validators.required]),
    email: new FormControl('marci@gmail.com'),
    pin: new FormControl('123456789'),
    address: new FormGroup({
      address1: new FormControl('', [Validators.required]),
      brgy: new FormControl('', [Validators.required]),
      cityMun: new FormControl('', [Validators.required]),
      prov: new FormControl('', [Validators.required]),
      reg: new FormControl('', [Validators.required]),
    }),
    fullAddress: new FormControl(''),
    signature: new FormControl(),
  });

  guardianForm = new FormGroup({
    lastName: new FormControl('Francisco', [Validators.required]),
    firstName: new FormControl('Merry Joy', [Validators.required]),
    middleName: new FormControl('Lukban'),
    suffix: new FormControl(''),
    sex: new FormControl('Female'),
    dob: new FormControl(new Date(1994, 12, 26), [Validators.required]),
    age: new FormControl(20, [Validators.required]),
    contactNo: new FormControl('09051233333', [Validators.required]),
    email: new FormControl('joy@gmail.com'),
    pin: new FormControl('123456789'),
    address: new FormGroup({
      address1: new FormControl('', [Validators.required]),
      brgy: new FormControl('', [Validators.required]),
      cityMun: new FormControl('', [Validators.required]),
      prov: new FormControl('', [Validators.required]),
      reg: new FormControl('', [Validators.required]),
    }),
    fullAddress: new FormControl(''),
    signature: new FormControl(),
  });

  summary = {
    patient: null,
    guardian: null,
  };

  /* 
   // won't be saved on the actual db of the user
    encounter: new FormGroup({
      payor: new FormControl('', [Validators.required]),
      atc: new FormControl(''),
      appointment: new FormGroup({
        date: new FormControl(),
        time: new FormControl(),
      }),
    }),
*/
  constructor(
    private locationHelper: LocationHelperService,
    private patientApi: PatientApiService
  ) {}

  ngOnInit(): void {
    this.patientForm.valueChanges.subscribe((val) => {
      this.summary['patient'] = val;
    });

    this.patientForm.get('address')?.valueChanges.subscribe((val) => {
      let { address1, brgy, cityMun, reg, prov } = val;
      if (val) {
        this.patientForm
          .get('fullAddress')
          ?.setValue(
            this.locationHelper.fullAddress(address1, brgy, cityMun, prov, reg)
          );
      }
    });

    this.guardianForm.get('address')?.valueChanges.subscribe((val) => {
      let { address1, brgy, cityMun, reg, prov } = val;
      if (val) {
        this.guardianForm
          .get('fullAddress')
          ?.setValue(
            this.locationHelper.fullAddress(address1, brgy, cityMun, prov, reg)
          );
      }
    });

    this.guardianForm.valueChanges.subscribe((val) => {
      this.summary['guardian'] = val;
    });
  }

  lookupMasterlist() {
    this.masterlistComponent.lookupMasterlist().subscribe((res: any) => {
      console.log(res);

      // create mapping service for masterlist and patients collection
      if (res) {
        var patient = {
          firstName: res.firstName,
          lastName: res.lastName,
          middleName: res.middleName,
          suffix: res.suffix,
          dob: res.dob,
          // age: res.age,
          mobileNo: res.mobileNo,
          pin: res.pin,
        };

        var guardian = {
          firstName: res.memberName,
          // lastName: res.memberFirstName,
          // middleName: res.firstName,
          // suffix: res.suffix,
          dob: res.memberDob,
          // age: res.age,
          mobileNo: res.mobileNo,
          pin: res.memberPin,
        };

        this.patientForm.patchValue(patient);
        this.guardianForm.patchValue(guardian);

        this.stepper.next();
      }
    });
  }

  saveAndCreateSchedule() {
    let patient = this.patientForm.value;
    if (patient.age < 21) {
      patient['guardian'] = this.guardianForm.value;
    }
    this.patientApi.createPatient(patient).subscribe((res: any) => {
      // go to schedule
    });
  }
}
