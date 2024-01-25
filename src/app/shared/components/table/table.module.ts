import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { TableMaterialsModule } from '../../modules/table-materials/table-materials.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, TableMaterialsModule, MatCardModule],
  exports: [TableComponent],
})
export class TableModule {}
