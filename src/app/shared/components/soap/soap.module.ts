import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoapComponent } from './soap.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { SubjectiveComponent } from './components/subjective/subjective.component';
import { ObjectiveComponent } from './components/objective/objective.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { PlanComponent } from './components/plan/plan.component';

@NgModule({
  declarations: [
    SoapComponent,
    SubjectiveComponent,
    ObjectiveComponent,
    AssessmentComponent,
    PlanComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDividerModule,
    MatTooltipModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatMenuModule,
  ],
  exports: [SoapComponent, SubjectiveComponent, ObjectiveComponent],
})
export class SoapModule {}
