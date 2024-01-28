import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PatientApiService } from 'src/app/core/api/patient-api/patient-api.service';
import { Column } from 'src/app/core/classes/Column.class';
import { RowOption } from 'src/app/core/interfaces/RowOption.interface';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss'],
})
export class PatientsListComponent implements OnInit {
  columns: Column[] = [
    {
      columnDef: 'pin',
      header: 'PIN',
      cell: (element: any) => `${element.pin}`,
    },
    {
      columnDef: 'sex',
      header: 'Sex',
      cell: (element: any) => `${element.sex}`,
    },
    {
      columnDef: 'fullName',
      header: 'Full Name',
      cell: (element: any) => `${element.lastName}`,
    },
    {
      columnDef: 'dob',
      header: 'Date of Birth',
      cell: (element: any) => `${element.dob}`,
    },
    {
      columnDef: 'age',
      header: 'Age',
      cell: (element: any) => `${element.age}`,
    },
  ];

  dataSource: any[] = [];
  totalRecordCount = 0;
  rowOptions: Array<RowOption> = [
    {
      name: 'Create Appointment',
      value: 'create_appointment',
      icon: 'today',
    },
  ];
  keyword = new FormControl('123456789');
  constructor(private patientApi: PatientApiService) {}

  ngOnInit(): void {}

  searchPatients() {
    if (!this.keyword.value) {
      this.dataSource = [];
      this.totalRecordCount = 0;
      return;
    }
    this.patientApi.getPatients().subscribe(
      (res) => {
        this.dataSource = res.records;
        this.totalRecordCount = res.total;
      },
      (err) => {
        alert('Something went wrong while fetching data.');
      }
    );
  }

  clear() {
    this.keyword.setValue('');
    this.dataSource = [];
    this.totalRecordCount = 0;
  }

  createAppointment(data: any) {
    console.log(data);
  }
}
