import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-enroll-patient',
  templateUrl: './enroll-patient.component.html',
  styleUrls: ['./enroll-patient.component.scss'],
})
export class EnrollPatientComponent implements OnInit {
  healthProfileFG = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    middleName: new FormControl(''),
    suffix: new FormControl(''),
  });

  reviewOfSystemsFG = new FormGroup({
    chiefComplaint: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {}
}
