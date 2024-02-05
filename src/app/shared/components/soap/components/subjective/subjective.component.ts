import { Component, Input, OnInit } from '@angular/core';
import { subjective } from '../../soap.config';
import * as SubFG from '../../soap.config-fg';
import * as LIST from '../../soap.list';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { SoapParameters } from 'src/app/core/interfaces/SoapParameters.interface';
import { CalculatorService } from 'src/app/core/helpers/calculator/calculator.service';

@Component({
  selector: 'app-subjective',
  templateUrl: './subjective.component.html',
  styleUrls: ['./subjective.component.scss'],
})
export class SubjectiveComponent implements OnInit {
  @Input() form = subjective;
  @Input() parameters: SoapParameters = {
    sex: '',
    age: { years: 0, months: 0, days: 0 },
    encounter: {
      payor: '',
      atc: '',
    },
  };
  LIST = LIST;

  ngOnInit(): void {
    this.autoComputeSmokingConsumption();
  }

  autoComputeSmokingConsumption() {
    var smoker = this.personal_social_hx_fg.get('smoker') as FormGroup;
    smoker?.get('sticks_day')?.valueChanges.subscribe((sticks_day) => {
      var no_years = smoker?.get('no_years')?.value;
      var consumption = this.calculate.smokingConsumption(sticks_day, no_years);
      smoker.patchValue({ consumption });
    });

    smoker?.get('no_years')?.valueChanges.subscribe((no_years) => {
      var sticks_day = smoker?.get('sticks_day')?.value;
      var consumption = this.calculate.smokingConsumption(sticks_day, no_years);
      smoker.patchValue({ consumption });
    });
  }

  constructor(private calculate: CalculatorService) {
    console.log(this.parameters);
  }

  past_medical_hx_fg = this.form.get('past_medical_hx') as FormGroup;

  get chronic_medical_conditions() {
    return this.past_medical_hx_fg.get(
      'chronic_medical_conditions',
    ) as FormArray;
  }

  get allergies() {
    return this.past_medical_hx_fg.get('allergies') as FormArray;
  }

  get surgeries() {
    return this.past_medical_hx_fg.get('surgeries') as FormArray;
  }

  get medications() {
    return this.past_medical_hx_fg.get('medications') as FormArray;
  }

  get chronologic_ob_hxs() {
    return this.past_medical_hx_fg.get('chronologic_ob_hxs') as FormArray;
  }

  get birth_control_methods() {
    return this.past_medical_hx_fg.get('birth_control_methods') as FormArray;
  }

  immunization_hx_fg = this.form.get('immunization_hx') as FormGroup;

  get childhood() {
    return this.immunization_hx_fg.get('childhood') as FormArray;
  }

  get adulthood() {
    return this.immunization_hx_fg.get('adulthood') as FormArray;
  }

  get family_medical_hx() {
    return this.form.get('family_medical_hx') as FormArray;
  }

  personal_social_hx_fg = this.form.get('personal_social_hx') as FormGroup;

  get physical_activities() {
    return this.personal_social_hx_fg.get('physical_activities') as FormArray;
  }

  get dietary_hx() {
    return this.personal_social_hx_fg.get('dietary_hx') as FormArray;
  }

  get carbonated_drinks() {
    return this.personal_social_hx_fg.get('carbonated_drinks') as FormArray;
  }

  update_selected_chronic_disease(disease: string) {
    var index = this.chronic_medical_conditions.value.findIndex(
      (o: any) => o.name == disease,
    );

    if (index == -1) {
      var fg = SubFG.chronic_medical_condition_fg();
      fg.get('name')?.setValue(disease);
      this.chronic_medical_conditions.push(fg);
    } else {
      this.chronic_medical_conditions.removeAt(index);
    }
  }

  update_selected_chronic_disease_fam(disease: string, i: number) {
    var index = this.fmhx_chronic_medical_conditions(i).value.findIndex(
      (o: any) => o.name == disease,
    );

    if (index == -1) {
      var fg = SubFG.chronic_medical_condition_fg();
      fg.get('name')?.setValue(disease);
      this.fmhx_chronic_medical_conditions(i).push(fg);
    } else {
      this.fmhx_chronic_medical_conditions(i).removeAt(index);
    }
  }

  update_selected_adulthood(vaccine: string) {
    var index = this.adulthood.value.findIndex((o: any) => o.name == vaccine);

    if (index == -1) {
      var fg = SubFG.immunization_hx_fg();
      fg.get('name')?.setValue(vaccine);
      this.adulthood.push(fg);
    } else {
      this.adulthood.removeAt(index);
    }
  }

  update_selected_childhood(vaccine: string) {
    var index = this.childhood.value.findIndex((o: any) => o.name == vaccine);

    if (index == -1) {
      var fg = SubFG.immunization_hx_fg();
      fg.get('name')?.setValue(vaccine);
      this.childhood.push(fg);
    } else {
      this.childhood.removeAt(index);
    }
  }

  update_selected_ob(vaccine: string) {
    var index = this.ob.value.findIndex((o: any) => o.name == vaccine);

    if (index == -1) {
      var fg = SubFG.immunization_hx_fg();
      fg.get('name')?.setValue(vaccine);
      this.ob.push(fg);
    } else {
      this.ob.removeAt(index);
    }
  }

  fmhx_chronic_medical_conditions(i: number) {
    return (
      this.family_medical_hx.at(i).get('past_medical_hx') as FormGroup
    ).get('chronic_medical_conditions') as FormArray;
  }

  get ob() {
    return (this.form.get('immunization_hx') as FormGroup).get(
      'ob',
    ) as FormArray;
  }
  onAddAllergy() {
    this.allergies.push(SubFG.allergy_fg());
  }

  onRemoveAllergy(i: number) {
    this.allergies.removeAt(i);
  }

  onAddSurgery() {
    this.surgeries.push(SubFG.surgery_fg());
  }
  onRemoveSurgery(i: number) {
    this.surgeries.removeAt(i);
  }

  onAddMedication() {
    this.medications.push(SubFG.medication_fg());
  }
  onRemoveMedication(i: number) {
    this.medications.removeAt(i);
  }

  onAddChronologicOB() {
    this.chronologic_ob_hxs.push(SubFG.chronologic_ob_hx_fg());
  }

  onRemoveChronologicOB(i: number) {
    this.chronologic_ob_hxs.removeAt(i);
  }

  onAddBirthControlMethod() {
    this.birth_control_methods.push(SubFG.birth_control_methods_fg());
  }

  onRemoveBirthControlMethod(i: number) {
    this.birth_control_methods.removeAt(i);
  }

  onAddFamilyMember() {
    this.family_medical_hx.push(SubFG.family_medical_hx_fg());
  }

  onRemoveFamilyMember(i: number) {
    this.family_medical_hx.removeAt(i);
  }

  onAddPhysicalActivity() {
    this.physical_activities.push(SubFG.physical_activity_fg());
  }

  onRemovePhysicalActivity(i: number) {
    this.physical_activities.removeAt(i);
  }

  onAddDietaryHx() {
    this.dietary_hx.push(SubFG.dietary_hx_fg());
  }

  onRemoveDietaryHx(i: number) {
    this.dietary_hx.removeAt(i);
  }

  onAddCarbonatedDrink() {
    this.carbonated_drinks.push(SubFG.carbonated_drink_fg());
  }

  onRemoveCarbonatedDrink(i: number) {
    this.carbonated_drinks.removeAt(i);
  }

  review_of_system = this.form.get('review_of_system');

  ros_change(value: string, formArrayStr: string) {
    var fa = this.review_of_system?.get(formArrayStr) as FormArray;
    fa.push(new FormControl(value));
  }

  isChecked(value: string, formArrayStr: string) {
    var fa = this.review_of_system?.get(formArrayStr) as FormArray;
    if (fa.value) return fa.value.findIndex((o: string) => o == value) >= 0;
    return false;
  }

  isChronicSelected(disease: string) {
    return (
      this.chronic_medical_conditions.value.findIndex(
        (o: any) => o.name == disease,
      ) > -1
    );
  }

  isChronicInFamilySelected(disease: string, i: number) {
    return (
      this.fmhx_chronic_medical_conditions(i).value.findIndex(
        (o: any) => o.name == disease,
      ) > -1
    );
  }

  isChildhoodImmunizationSelected(vaccine: string) {
    return this.childhood.value.findIndex((o: any) => o.name == vaccine) > -1;
  }

  isAdulthoodImmunizationSelected(vaccine: string) {
    return this.adulthood.value.findIndex((o: any) => o.name == vaccine) > -1;
  }

  isObImmunizationSelected(vaccine: string) {
    return this.ob.value.findIndex((o: any) => o.name == vaccine) > -1;
  }
}
