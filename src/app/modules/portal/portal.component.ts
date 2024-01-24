import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DrawerLeftComponent } from './components/drawer-left/drawer-left.component';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements OnInit {
  drawerLeft!: MatDrawer;
  constructor() {}

  ngOnInit(): void {}
}
