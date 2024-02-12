import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeService } from '@core/api/employee/employee.service';
import { TableResponse } from '@core/interfaces/TableResponse.interface';
import { User } from '@core/interfaces/models/User.interface';
import { SnackbarService } from '@shared/components/snackbar/snackbar.service';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, concatMap, filter, finalize } from 'rxjs/operators';
import { UpsertEmployeeComponent } from './components/upsert-employee/upsert-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  tableResponse$: Observable<TableResponse<User>>;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  query: Record<string, string | number> = {
    perPage: 10,
  };

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog,
    private snackbarService: SnackbarService,
  ) {
    this.tableResponse$ = this._fetchEmployees();
  }

  onAddEmployee() {
    this.openUpsertDialog().subscribe(() => {
      this.tableResponse$ = this._fetchEmployees();
    });
  }

  onTableChange(query: Record<string, string | number>) {
    this.query = query;
    this.tableResponse$ = this._fetchEmployees();
  }

  onSelectEmployee(employee: User) {
    this.snackbarService.openLoadingSnackbar('Loading employee details...');
    this.employeeService
      .getEmployee(employee._id)
      .pipe(
        catchError((e) => {
          this.snackbarService.openErrorSnackbar(
            e.error.message ||
              'An error occurred while fetching employee details',
          );
          return throwError(() => of(false));
        }),
        concatMap((user) => {
          this.snackbarService.closeLoadingSnackbar();
          return this.openUpsertDialog(user);
        }),
      )
      .subscribe(() => {
        this.tableResponse$ = this._fetchEmployees();
      });
  }

  openUpsertDialog(employeeToUpdate?: User) {
    return this.dialog
      .open(UpsertEmployeeComponent, {
        width: '40%',
        data: employeeToUpdate,
        disableClose: true,
      })
      .afterClosed()
      .pipe(filter((result) => result));
  }

  private _fetchEmployees() {
    this.isLoading$.next(true);

    return this.employeeService
      .getEmployees(this.query)
      .pipe(finalize(() => this.isLoading$.next(false)));
  }
}
