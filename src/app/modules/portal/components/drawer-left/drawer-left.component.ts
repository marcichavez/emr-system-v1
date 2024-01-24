import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavRouterlink } from 'src/app/core/interfaces/NavRouterLink.interface';

@Component({
  selector: 'app-drawer-left',
  templateUrl: './drawer-left.component.html',
  styleUrls: ['./drawer-left.component.scss'],
})
export class DrawerLeftComponent implements OnInit {
  @Input() drawer!: MatDrawer;
  navRouterLinks: Array<NavRouterlink> = [];
  constructor() {}

  ngOnInit(): void {}
}
