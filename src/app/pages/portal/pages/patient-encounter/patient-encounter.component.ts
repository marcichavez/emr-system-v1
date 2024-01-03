import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-encounter',
  templateUrl: './patient-encounter.component.html',
  styleUrls: ['./patient-encounter.component.scss'],
})
export class PatientEncounterComponent implements OnInit {
  doctorOnVideoImgSrc = '../../../../../assets/images/doctor-on-video.jpg';
  patientOnVideoImgSrc =
    'https://imengine.prod.srp.navigacloud.com/?uuid=C11DB0F8-DD28-4C6E-9DAD-88A2FFF42818&type=primary&q=72&width=1024';
  nurseOnVideoImgSrc = '../../../../../assets/images/nurse-on-video.png';
  mockPatient = {
    profile_pic:
      'https://fakeimg.pl/200x200/cccccc/bdbdbd?text=PHOTO&font=bebas',
    patient_id: '123456',
    first_name: 'John',
    last_name: 'Doe',
    gender: 'Male',
    date_of_birth: '1990-05-15',
    age: 35,
    marital_status: 'Single',
    contact: {
      phone: '123-456-7890',
      email: 'john.doe@example.com',
      address: {
        street: '123 Main Street',
        city: 'Cityville',
        state: 'State',
        zip_code: '12345',
        country: 'Country',
      },
    },
    emergency_contact: {
      name: 'Jane Doe',
      relationship: 'Spouse',
      phone: '987-654-3210',
    },
    health_information: {
      height: '180 cm',
      weight: '75 kg',
      smoker: 'Never',
      alcohol_consumption: 'Occasional',
      allergies: ['Pollen', 'Penicillin'],
    },
  };

  calculatorType: string = '';

  constructor() {}

  ngOnInit(): void {}
}
