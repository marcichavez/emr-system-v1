import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from '@core/api/employee/employee.service';
import { STATUS } from '@core/constants/STATUS.constant';
import { User } from '@core/interfaces/models/User.interface';
import { ConfirmationDialogService } from '@shared/components/confirmation-dialog/confirmation-dialog.service';
import { SnackbarService } from '@shared/components/snackbar/snackbar.service';
import { BehaviorSubject } from 'rxjs';
import { filter, finalize, switchMap } from 'rxjs/operators';
import { UPSERT_EMPLOYEE_CONFIG } from './upsert-employee.config';
export interface UpsertEmployeeConfig {
  title: string;
  confirmationDialog: {
    title: string;
    message: string;
    cancelText?: string;
    confirmText?: string;
  };
}
@Component({
  selector: 'app-upsert-employee',
  templateUrl: './upsert-employee.component.html',
  styleUrls: ['./upsert-employee.component.scss'],
})
export class UpsertEmployeeComponent {
  employeeFormGroup: FormGroup;
  config: UpsertEmployeeConfig;
  isUpdate: boolean;
  serverErrorMessage = '';
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isEmployeeDeleted: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public employee: User,
    private formBuilder: FormBuilder,
    private confirmationDialogService: ConfirmationDialogService,
    private employeeService: EmployeeService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<UpsertEmployeeComponent>,
  ) {
    this.isUpdate = !!this.employee;
    this.isEmployeeDeleted = this.employee?.status === STATUS.DELETED;
    this.config = this.isUpdate
      ? UPSERT_EMPLOYEE_CONFIG.UPDATE
      : UPSERT_EMPLOYEE_CONFIG.CREATE;
    this.employeeFormGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      licenseNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });

    if (this.isUpdate) {
      this.employeeFormGroup.reset(this.employee);
    }
  }

  onSaveEmployee() {
    this.confirmationDialogService
      .openConfirmationDialog(this.config.confirmationDialog)
      .pipe(
        filter((confirm) => confirm),
        switchMap(() => {
          const body = this.employeeFormGroup.getRawValue();
          this._setLoadingState(true);
          this.snackbarService.openLoadingSnackbar('Saving employee...');

          if (this.isUpdate) {
            return this.employeeService.updateEmployee(body, this.employee._id);
          }

          return this.employeeService.createEmployee(body);
        }),
        finalize(() => {
          this._setLoadingState(false);
        }),
      )
      .subscribe(
        () => {
          this.snackbarService.openSuccessSnackbar(
            'Employee saved successfully',
          );
          this.dialogRef.close(true);
        },
        (err) => {
          this.snackbarService.openErrorSnackbar(
            'Failed to save employee, please check the form',
          );
          this.serverErrorMessage = err.error.message;
        },
      );
  }

  onDeleteEmployee() {
    this.confirmationDialogService
      .openConfirmationDialog({
        title: 'Delete Employee Confirmation',
        message: 'Are you sure you want to delete this employee?',
      })
      .pipe(
        filter((confirm) => confirm),
        switchMap(() => {
          this._setLoadingState(true);
          this.snackbarService.openLoadingSnackbar('Deleting employee...');

          return this.employeeService.patchEmployeeStatus(
            STATUS.DELETED,
            this.employee._id,
          );
        }),
        finalize(() => {
          this._setLoadingState(false);
        }),
      )
      .subscribe(
        () => {
          this.snackbarService.openSuccessSnackbar('Employee has been deleted');
          this.dialogRef.close(true);
        },
        (err) => {
          this.serverErrorMessage = err.error.message;
        },
      );
  }

  private _setLoadingState(state: boolean) {
    if (state) {
      this.employeeFormGroup.disable();
    } else {
      this.employeeFormGroup.enable();
    }
    this.isLoading$.next(state);
  }
}
