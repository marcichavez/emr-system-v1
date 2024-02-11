import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '@core/api/user/user.service';
import { STATUS } from '@core/constants/STATUS.constant';
import { User } from '@core/interfaces/models/User.interface';
import { ConfirmationDialogService } from '@shared/components/confirmation-dialog/confirmation-dialog.service';
import { SnackbarService } from '@shared/components/snackbar/snackbar.service';
import { BehaviorSubject } from 'rxjs';
import { filter, finalize, switchMap } from 'rxjs/operators';
import { UPSERT_TENANT_CONFIG } from './upsert-tenant.config';

export interface UpsertTenantConfig {
  title: string;
  confirmationDialog: {
    title: string;
    message: string;
    cancelText?: string;
    confirmText?: string;
  };
}

@Component({
  selector: 'app-upsert-tenant',
  templateUrl: './upsert-tenant.component.html',
  styleUrls: ['./upsert-tenant.component.scss'],
})
export class UpsertTenantComponent {
  tenantFormGroup: FormGroup;
  serverErrorMessage = '';
  config: UpsertTenantConfig;
  isUpdate: boolean;
  isTenantDeleted: boolean;
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    @Inject(MAT_DIALOG_DATA) public tenant: User,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private confirmationDialogService: ConfirmationDialogService,
    private snackbarService: SnackbarService,
    private dialogRef: MatDialogRef<UpsertTenantComponent>,
  ) {
    this.isUpdate = !!this.tenant;
    this.isTenantDeleted = this.tenant?.status === STATUS.DELETED;

    this.config = this.isUpdate
      ? UPSERT_TENANT_CONFIG.UPDATE
      : UPSERT_TENANT_CONFIG.CREATE;

    this.tenantFormGroup = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      licenseNumber: [''],
      email: ['', [Validators.required, Validators.email]],
      isClinician: [false, [Validators.required]],
    });

    if (this.isUpdate) {
      this.tenantFormGroup.reset(this.tenant);
    }
  }

  onSaveTenant() {
    this.confirmationDialogService
      .openConfirmationDialog(this.config.confirmationDialog)
      .pipe(
        filter((confirm) => confirm),
        switchMap(() => {
          const body = this.tenantFormGroup.getRawValue();
          this._setLoadingState(true);
          this.snackbarService.openLoadingSnackbar('Saving tenant...');

          if (this.isUpdate) {
            return this.userService.updateUser(body, this.tenant._id);
          }

          return this.userService.createUser(body);
        }),
        finalize(() => {
          this._setLoadingState(false);
        }),
      )
      .subscribe(
        () => {
          this.snackbarService.openSuccessSnackbar('Tenant saved successfully');
          this.dialogRef.close(true);
        },
        (err) => {
          this.snackbarService.openErrorSnackbar(
            'Failed to save tenant, please check the form',
          );
          this.serverErrorMessage = err.error.message;
        },
      );
  }

  onRestoreTenant() {
    this.confirmationDialogService
      .openConfirmationDialog({
        title: 'Restore Tenant Confirmation',
        message: 'Are you sure you want to restore this tenant?',
      })
      .pipe(
        filter((confirm) => confirm),
        switchMap(() => {
          this._setLoadingState(true);
          this.snackbarService.openLoadingSnackbar('Restoring tenant...');

          return this.userService.patchUserStatus(
            STATUS.ACTIVE,
            this.tenant._id,
          );
        }),
        finalize(() => {
          this._setLoadingState(false);
        }),
      )
      .subscribe(
        () => {
          this.snackbarService.openSuccessSnackbar('Tenant has been restored');
          this.dialogRef.close(true);
        },
        (err) => {
          this.serverErrorMessage = err.error.message;
        },
      );
  }

  onDeleteTenant() {
    this.confirmationDialogService
      .openConfirmationDialog({
        title: 'Delete Tenant Confirmation',
        message: 'Are you sure you want to delete this tenant?',
      })
      .pipe(
        filter((confirm) => confirm),
        switchMap(() => {
          this._setLoadingState(true);
          this.snackbarService.openLoadingSnackbar('Deleting tenant...');

          return this.userService.patchUserStatus(
            STATUS.DELETED,
            this.tenant._id,
          );
        }),
        finalize(() => {
          this._setLoadingState(false);
        }),
      )
      .subscribe(
        () => {
          this.snackbarService.openSuccessSnackbar('Tenant has been deleted');
          this.dialogRef.close(true);
        },
        (err) => {
          this.serverErrorMessage = err.error.message;
        },
      );
  }

  private _setLoadingState(state: boolean) {
    if (state) {
      this.tenantFormGroup.disable();
    } else {
      this.tenantFormGroup.enable();
    }
    this.isLoading$.next(state);
  }
}
