import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '@core/api/user/user.service';
import { TableResponse } from '@core/interfaces/TableResponse.interface';
import { User } from '@core/interfaces/models/User.interface';
import { SnackbarService } from '@shared/components/snackbar/snackbar.service';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, concatMap, filter, finalize } from 'rxjs/operators';
import { UpsertTenantComponent } from './components/upsert-tenant/upsert-tenant.component';

@Component({
  selector: 'app-tenants',
  templateUrl: './tenants.component.html',
  styleUrls: ['./tenants.component.scss'],
})
export class TenantsComponent {
  tableResponse$: Observable<TableResponse<User>>;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  query: Record<string, string | number> = {
    perPage: 10,
  };

  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private snackbarService: SnackbarService,
  ) {
    this.tableResponse$ = this._fetchUsers();
  }

  onAddTenantClick() {
    this.openUpsertDialog().subscribe(() => {
      this.tableResponse$ = this._fetchUsers();
    });
  }

  onTableChange(query: Record<string, string | number>) {
    this.query = query;
    this.tableResponse$ = this._fetchUsers();
  }

  onSelectTenant(tenant: User) {
    this.snackbarService.openLoadingSnackbar('Loading tenant details...');
    this.userService
      .getUser(tenant._id)
      .pipe(
        catchError((e) => {
          this.snackbarService.openErrorSnackbar(
            e.error.message ||
              'An error occurred while fetching tenant details',
          );
          return throwError(() => of(false));
        }),
        concatMap((user) => {
          this.snackbarService.closeLoadingSnackbar();
          return this.openUpsertDialog(user);
        }),
      )
      .subscribe(() => {
        this.tableResponse$ = this._fetchUsers();
      });
  }

  openUpsertDialog(tenantToUpdate?: User) {
    return this.dialog
      .open(UpsertTenantComponent, {
        width: '40%',
        data: tenantToUpdate,
        disableClose: true,
      })
      .afterClosed()
      .pipe(filter((result) => result));
  }

  private _fetchUsers() {
    this.isLoading$.next(true);
    return this.userService
      .getUsers(this.query)
      .pipe(finalize(() => this.isLoading$.next(false)));
  }
}
