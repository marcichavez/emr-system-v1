import { Component, OnInit } from '@angular/core';
import { PATIENTS } from '../../../../../assets/json/patients';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selectedAppointmentDate = new Date();
  paymentType = ['PhilHealth Pay', 'Personal Pay'];
  me = {
    name: 'Joaquin Guillermo',
    email: 'jg@gmail.com',
    onCallStatus: true,
    consultantStatus: true,
  };

  dcol_appointments: string[] = [
    // 'actions',
    'patient',
    'age',
    'chiefComplaint',

    'bloodPressure',

    'heartRate',
    'respiratoryRate',
    'bodyTemperature',

    'placeOfService',
    'timeOfVisit',
    'paymentType',
    'status',
    'action',
  ];

  dsrc_Appointments = PATIENTS;

  summary = {
    totalAppointments: 23,
    totalNewPatients: 4,
    totalFollowUps: 10,
  };

  adminCornerSummary = {
    totalEnrolled: 23,
    totalConsulted: 4,
    totalRequestedWithLab: 10,
  };

  constructor() {}

  ngOnInit(): void {}

  // mocks

  dcol_Medicines: string[] = ['name', 'quantity', 'expiry_date'];
  dsrc_Medicines = [
    {
      _id: '1',
      name: 'Aspirin',
      brand: 'Bayer',
      quantity: 200,
      unit: 'tablets',
      price_per_unit: 0.75,
      expiry_date: '2023-12-15',
    },
    {
      _id: '2',
      name: 'Ciprofloxacin',
      brand: 'Generic',
      quantity: 50,
      unit: 'tablets',
      price_per_unit: 1.2,
      expiry_date: '2024-05-22',
    },
    {
      _id: '3',
      name: 'Paracetamol',
      brand: 'Tylenol',
      quantity: 100,
      unit: 'capsules',
      price_per_unit: 0.5,
      expiry_date: '2023-10-30',
    },
    {
      _id: '4',
      name: 'Ibuprofen',
      brand: 'Advil',
      quantity: 150,
      unit: 'tablets',
      price_per_unit: 0.8,
      expiry_date: '2024-08-18',
    },
    {
      _id: '5',
      name: 'Amoxicillin',
      brand: 'Generic',
      quantity: 80,
      unit: 'capsules',
      price_per_unit: 1.5,
      expiry_date: '2023-11-25',
    },
  ];
}
