import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavRouterlink } from 'src/app/core/interfaces/NavRouterLink.interface';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
})
export class PortalComponent implements OnInit {
  currentNavName = '';
  drawerLeft!: MatDrawer;
  constructor() {}

  ngOnInit(): void {}

  urlChange(navRouterLink: NavRouterlink) {
    this.currentNavName = navRouterLink.name;
  }
}
