import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicalNotesComponent } from './clinical-notes.component';

@NgModule({
  declarations: [ClinicalNotesComponent],
  imports: [CommonModule],
  exports: [ClinicalNotesComponent],
})
export class ClinicalNotesModule {}
