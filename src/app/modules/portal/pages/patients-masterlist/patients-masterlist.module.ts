import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientsMasterlistRoutingModule } from './patients-masterlist-routing.module';
import { PatientsMasterlistComponent } from './patients-masterlist.component';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { MatCardModule } from '@angular/material/card';
import { FormMaterialsModule } from 'src/app/shared/modules/form-materials/form-materials.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [PatientsMasterlistComponent],
  imports: [
    CommonModule,
    PatientsMasterlistRoutingModule,
    TableModule,
    MatCardModule,
    FormMaterialsModule,
    MatSnackBarModule,
  ],
})
export class PatientsMasterlistModule {}
