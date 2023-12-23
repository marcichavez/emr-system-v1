import { Component, OnInit } from '@angular/core';
import { PATIENTS } from '../../../../../assets/json/patients';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  me = {
    name: 'Joaquin Guillermo',
    email: 'jg@gmail.com',
    onCallStatus: true,
    consultantStatus: true,
  };

  displayedColumns: string[] = [
    'patient',
    'age',
    'heartRate',
    'respiratoryRate',
    'bloodPressure',
    'bodyTemperature',
    'status',
    'reasonForVisit',
    'placeOfService',
    'time',
  ];

  dataSource = PATIENTS;

  constructor() {}

  ngOnInit(): void {}
}
