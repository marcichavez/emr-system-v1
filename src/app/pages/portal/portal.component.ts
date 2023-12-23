import { Component, OnInit } from '@angular/core';

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
      name: 'RPM',
      routerLink: 'rpm',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
