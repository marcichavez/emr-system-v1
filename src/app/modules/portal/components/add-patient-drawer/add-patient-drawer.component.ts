import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-add-patient-drawer',
  templateUrl: './add-patient-drawer.component.html',
  styleUrls: ['./add-patient-drawer.component.scss'],
})
export class AddPatientDrawerComponent implements OnInit {
  @Input() drawer!: MatDrawer;
  constructor() {}

  ngOnInit(): void {}
}