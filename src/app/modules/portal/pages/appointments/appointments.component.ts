import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Column } from 'src/app/core/classes/Column.class';
import { CreateEncounterComponent } from './components/create-encounter/create-encounter.component';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss'],
})
export class AppointmentsComponent implements OnInit {
  columns: Column[] = [
    {
      columnDef: 'name',
      header: 'Patient',
      cell: (element: any) => `${element._patientId.fullName}`,
    },
    {
      columnDef: 'age',
      header: 'Age',
      cell: (element: any) => `${element._patiendId.age}`,
    },
    {
      columnDef: 'chiefComplaint',
      header: 'Chief Complaint',
      cell: (element: any) => `${element.soap.subjective.chiefComplaint}`,
    },
    {
      columnDef: 'bp',
      header: 'BP',
      cell: (element: any) => `${element.soap.objective.vital_sigs.bp}`,
    },
    {
      columnDef: 'hr',
      header: 'HR',
      cell: (element: any) => `${element.soap.objective.vital_sigs.hr}`,
    },
    {
      columnDef: 'rr',
      header: 'RR',
      cell: (element: any) => `${element.soap.objective.vital_sigs.rr}`,
    },
    {
      columnDef: 'temp',
      header: 'Temp',
      cell: (element: any) => `${element.soap.objective.vital_sigs.temp}`,
    },
    {
      columnDef: 'paymentType',
      header: 'Payment Type',
      cell: (element: any) => `${element.paymentType}`,
    },
    {
      columnDef: 'status',
      header: 'Encounter Status',
      cell: (element: any) => `${element.encounterStatus}`,
    },
  ];

  dataSource = [];
  totalRecordCount = 0;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    console.log(this.selectWeek());
  }

  selectWeek() {
    var curr = new Date();
    var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()));
    var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
    console.log({ firstday, lastday });
  }

  onClickCreateEncounter(data?: any) {
    this.dialog.open(CreateEncounterComponent, {
      disableClose: true,
      minHeight: '100vh',
      minWidth: '100vw',
      data,
    });
  }
}
