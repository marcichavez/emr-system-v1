import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements OnInit {
  navRouterLinks = [
    {
      name: 'Dashboard',
      routerLink: 'dashboard',
    },
    {
      name: 'Patients',
      routerLink: 'patients',
    },
    {
      name: 'Calendar',
      routerLink: 'calendar',
    },
    {
      name: 'Users',
      routerLink: 'calendar',
    },
    {
      name: 'Medicines',
      routerLink: 'calendar',
    },
    {
      name: 'Lab Requests',
      routerLink: 'calendar',
    },
    {
      name: 'Tranches',
      routerLink: 'calendar',
    },
  ];

  clinicsList: string[] = [
    'LGU Tobacco',
    'My Private Clinic',
    'Clinic 4',
    'Super long clinic name for testing',
  ];
  selectedClinic = new FormControl(this.clinicsList[0]);

  constructor() {}

  ngOnInit(): void {}

  loadSelectedClinic(clinic: string) {
    setTimeout(() => {
      this.selectedClinic.setValue(clinic);
    }, 1000);
    // TODO: add loading for changing the metrics and the dashboard based on the selected clinic
  }
}
