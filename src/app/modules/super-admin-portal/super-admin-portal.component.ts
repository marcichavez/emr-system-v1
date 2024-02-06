import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-super-admin-portal',
  templateUrl: './super-admin-portal.component.html',
  styleUrls: ['./super-admin-portal.component.scss'],
})
export class SuperAdminPortalComponent {
  navigations = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: 'dashboard',
    },
    {
      label: 'Tenants',
      icon: 'people',
      route: 'tenants',
    },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  onLogout() {}
}
