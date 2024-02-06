import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/api/auth/auth.service';
import { SnackbarService } from '@shared/components/snackbar/snackbar.service';
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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private snackBarService: SnackbarService,
    private router: Router,
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small, Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  onLogout() {
    this.snackBarService.openLoadingSnackbar('Logging out...');
    this.authService.logout().subscribe(() => {
      setTimeout(() => {
        this.snackBarService.openSuccessSnackbar('Logged out successfully');
        this.router.navigate(['/auth/super-admin/login']);
      }, 3000);
    });
  }
}
