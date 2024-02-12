import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormMaterialsModule } from '@shared/modules/form-materials/form-materials.module';
import { TableMaterialsModule } from '@shared/modules/table-materials/table-materials.module';
import { SharedModule } from '@shared/shared.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { UpsertEmployeeComponent } from './components/upsert-employee/upsert-employee.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';

@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesTableComponent,
    UpsertEmployeeComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    MatButtonModule,
    TableMaterialsModule,
    NgxSkeletonLoaderModule,
    FormMaterialsModule,
    SharedModule,
    MatDialogModule,
  ],
})
export class EmployeesModule {}
