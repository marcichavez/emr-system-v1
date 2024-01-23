import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MOCK_PATIENT_LIST } from './patient.mock';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  keyword = new FormControl('');

  displayedColumns: string[] = [
    'pin',
    'memberPin',
    'sex',
    'lastName',
    'firstName',
    'middleName',
    'suffix',
    'dob',
    'age',
    'mobileNo',
    'memberType',
    'memberName',
    'memberDob',
  ];
  dataSource = MOCK_PATIENT_LIST;

  constructor() {}

  ngOnInit(): void {}
}
