import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { FormMaterialsModule } from 'src/app/shared/modules/form-materials/form-materials.module';

@NgModule({
  declarations: [CalendarComponent],
  imports: [CommonModule, CalendarRoutingModule, FormMaterialsModule],
})
export class CalendarModule {}
