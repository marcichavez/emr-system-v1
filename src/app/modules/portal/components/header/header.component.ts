import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '@core/api/auth/auth.service';
import { SnackbarService } from '@shared/components/snackbar/snackbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() drawerLeft!: MatDrawer;
  @Input() drawerRight!: MatDrawer;

  constructor(
    private snackBarService: SnackbarService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  onLogout() {
    this.snackBarService.openLoadingSnackbar('Logging out...');
    this.authService.logout().subscribe(() => {
      setTimeout(() => {
        this.snackBarService.openSuccessSnackbar('Logged out successfully');
        this.router.navigate(['/auth/login']);
      }, 3000);
    });
  }
}
