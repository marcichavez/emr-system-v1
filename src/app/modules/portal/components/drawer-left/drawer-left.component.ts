import { Component, OnInit } from '@angular/core';
import { NavRouterlink } from 'src/app/core/interfaces/NavRouterLink.interface';

@Component({
  selector: 'app-drawer-left',
  templateUrl: './drawer-left.component.html',
  styleUrls: ['./drawer-left.component.scss'],
})
export class DrawerLeftComponent implements OnInit {
  navRouterLinks: Array<NavRouterlink> = [];
  constructor() {}

  ngOnInit(): void {}
}
