import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormMaterialsModule } from '@shared/modules/form-materials/form-materials.module';
import { TableMaterialsModule } from '@shared/modules/table-materials/table-materials.module';
import { SharedModule } from '@shared/shared.module';
import { TenantsTableComponent } from './components/tenants-table/tenants-table.component';
import { UpsertTenantComponent } from './components/upsert-tenant/upsert-tenant.component';
import { TenantsRoutingModule } from './tenants-routing.module';
import { TenantsComponent } from './tenants.component';

@NgModule({
  declarations: [
    TenantsComponent,
    TenantsTableComponent,
    UpsertTenantComponent,
  ],
  imports: [
    CommonModule,
    TenantsRoutingModule,
    TableMaterialsModule,
    SharedModule,
    FormMaterialsModule,
    MatDialogModule,
    MatIconModule,
  ],
})
export class TenantsModule {}
