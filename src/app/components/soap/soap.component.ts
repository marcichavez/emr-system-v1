import { Component, OnInit, Input } from '@angular/core';
import { soap } from './soap.config';
import * as SubFG from './soap.config-fg';
import * as LIST from './soap.list';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-soap',
  templateUrl: './soap.component.html',
  styleUrls: ['./soap.component.scss'],
})
export class SoapComponent implements OnInit {
  @Input() parameters = {
    sex: '',
    age: { years: 0, months: 0, days: 0 },
    encounter: {
      payor: '',
      atc: '',
    },
  };
  LIST = LIST;
  soapForm = soap;

  constructor() {}

  ngOnInit(): void {
    this.autofillForm();

    this.soapForm.valueChanges.subscribe((o) => {
      localStorage.setItem('soap', JSON.stringify(this.soapForm.value));
    });
  }

  update_selected_chronic_disease(disease: string) {
    var index = this.chronic_medical_conditions.value.findIndex(
      (o: any) => o.name == disease
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
      (o: any) => o.name == disease
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

  subjective_fg = this.soapForm.get('subjective') as FormGroup;
  past_medical_hx_fg = this.subjective_fg.get('past_medical_hx') as FormGroup;

  get chronic_medical_conditions() {
    return this.past_medical_hx_fg.get(
      'chronic_medical_conditions'
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

  immunization_hx_fg = this.subjective_fg.get('immunization_hx') as FormGroup;

  get childhood() {
    return this.immunization_hx_fg.get('childhood') as FormArray;
  }

  get adulthood() {
    return this.immunization_hx_fg.get('adulthood') as FormArray;
  }

  get family_medical_hx() {
    return this.subjective_fg.get('family_medical_hx') as FormArray;
  }

  personal_social_hx_fg = this.subjective_fg.get(
    'personal_social_hx'
  ) as FormGroup;

  get physical_activities() {
    return this.personal_social_hx_fg.get('physical_activities') as FormArray;
  }

  get dietary_hx() {
    return this.personal_social_hx_fg.get('dietary_hx') as FormArray;
  }

  get carbonated_drinks() {
    return this.personal_social_hx_fg.get('carbonated_drinks') as FormArray;
  }

  assessment_fg = this.soapForm.get('assessment') as FormGroup;

  get diagnoses() {
    return this.assessment_fg.get('diagnoses') as FormArray;
  }

  plan_fg = this.soapForm.get('plan') as FormGroup;

  get diagnostics() {
    return this.plan_fg.get('diagnostics') as FormArray;
  }

  get medicines() {
    return this.plan_fg.get('medicines') as FormArray;
  }

  fmhx_chronic_medical_conditions(i: number) {
    return (
      this.family_medical_hx.at(i).get('past_medical_hx') as FormGroup
    ).get('chronic_medical_conditions') as FormArray;
  }

  get ob() {
    return (this.subjective_fg.get('immunization_hx') as FormGroup).get(
      'ob'
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

  onAddDiagnosis() {
    this.diagnoses.push(SubFG.diagnosis_fg());
    this.diagnostics.push(SubFG.diagnostic_fg());
  }

  onRemoveDiagnosis(i: number) {
    this.diagnoses.removeAt(i);
    this.diagnostics.removeAt(i);
  }

  onAddMedicine() {
    this.medicines.push(SubFG.medicine_fg());
  }

  onRemoveMedicine(i: number) {
    this.medicines.removeAt(i);
  }

  showValue() {
    console.log({
      soap: this.soapForm,
      parameters: this.parameters,
    });
  }

  isChronicSelected(disease: string) {
    return (
      this.chronic_medical_conditions.value.findIndex(
        (o: any) => o.name == disease
      ) > -1
    );
  }

  isChronicInFamilySelected(disease: string, i: number) {
    return (
      this.fmhx_chronic_medical_conditions(i).value.findIndex(
        (o: any) => o.name == disease
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

  fa_fgs = LIST.formArrays;

  autofillForm() {
    if (localStorage.getItem('soap')) {
      var soap = JSON.parse(localStorage.getItem('soap') || '{}');

      if (soap) {
        this.soapForm.patchValue(soap);
        // for formarrays
        let local_SubFG: any = SubFG;
        for (let fa_fg of this.fa_fgs) {
          for (let value of this.deepValue(soap, fa_fg.path)) {
            var fg;
            if (fa_fg.fg) {
              fg = local_SubFG[fa_fg.fg]();
              fg.patchValue(value);
            } else {
              fg = new FormControl();
              fg.setValue(value);
            }
            this.deepValueFormArray(this.soapForm, fa_fg.path).push(fg);
          }
        }
      }
    }
  }

  deepValue(obj: any, path: string) {
    var objCopy = JSON.parse(JSON.stringify(obj));
    var paths = path.split('.');
    var len = paths.length;
    for (var i = 0; i < len; i++) {
      objCopy = objCopy[paths[i]];
    }
    return objCopy;
  }

  deepValueFormArray(fg: FormGroup, path: string) {
    var paths = path.split('.');
    var len = paths.length - 1;
    for (var i = 0; i < len; i++) {
      fg = fg.get(paths[i]) as FormGroup;
    }
    var fa = fg.get(paths[len]) as FormArray;
    return fa;
  }

  review_of_system = this.subjective_fg.get('review_of_system');

  ros_change(value: string, formArrayStr: string) {
    var fa = this.review_of_system?.get(formArrayStr) as FormArray;
    fa.push(new FormControl(value));
  }

  isChecked(value: string, formArrayStr: string) {
    var fa = this.review_of_system?.get(formArrayStr) as FormArray;
    if (fa.value) return fa.value.findIndex((o: string) => o == value) >= 0;
    return false;
  }

  updateSpecify(i: number) {
    this.diagnoses
      .at(i)
      .get('isSpecify')
      ?.setValue(!this.diagnoses.at(i).get('isSpecify')?.value);
    if (this.diagnoses.at(i).get('isSpecify')?.value) {
      this.diagnoses.at(i).get('specify')?.setValidators(Validators.required);
    }
  }
}
