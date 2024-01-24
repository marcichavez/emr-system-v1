import { Component, OnInit, Input } from '@angular/core';
import { soap } from './soap.config';
import * as SubFG from './soap.config-fg';
import * as LIST from './soap.list';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Icd10Service } from 'src/app/services/api/icd_10/icd-10.service';
import { Observable } from 'rxjs';
import { MedicinesService } from 'src/app/services/api/medicines/medicines.service';

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
  objective_fg = this.soapForm.get('objective');
  anthropometrics_fg = this.objective_fg?.get('anthropometrics');
  icdFilteredOptions!: Observable<any>;
  icdKeyword = new FormControl();

  medFilteredOptions!: Observable<any>;
  medKeyword = new FormControl();

  constructor(
    private icdService: Icd10Service,
    private medService: MedicinesService
  ) {
    this.icdKeyword.valueChanges.subscribe((keyword) => {
      if (typeof keyword == 'string')
        this.icdFilteredOptions = this.icdService.getICDCodesByKeyword(keyword);
    });

    this.medKeyword.valueChanges.subscribe((keyword) => {
      if (typeof keyword == 'string')
        this.medFilteredOptions =
          this.medService.getMedicinesByKeyword(keyword);
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem('soap')) {
      var soap = JSON.parse(localStorage.getItem('soap') || '{}');
      this.autofillForm(soap, this.soapForm, this.fa_fgs);
    }

    this.soapForm.valueChanges.subscribe((o) => {
      localStorage.setItem('soap', JSON.stringify(this.soapForm.value));
    });

    this.anthropometrics_fg?.get('height')?.valueChanges.subscribe((h) => {
      var w = this.anthropometrics_fg?.get('weight')?.value;
      if (w && h)
        this.anthropometrics_fg?.get('bmi')?.setValue(this.calculateBMI(h, w));
    });
    this.anthropometrics_fg?.get('weight')?.valueChanges.subscribe((w) => {
      var h = this.anthropometrics_fg?.get('height')?.value;
      if (h && w)
        this.anthropometrics_fg?.get('bmi')?.setValue(this.calculateBMI(h, w));
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

  onAddDiagnosis(icd: any) {
    console.log(this.diagnoses.value);
    var index = this.diagnoses.value.findIndex(
      (o: any) => o.icd.code === icd.code
    );
    if (index > -1) return;
    this.diagnoses.push(SubFG.diagnosis_fg({ icd }));
    this.diagnostics.push(SubFG.diagnostic_fg({ icd }));
  }

  onRemoveDiagnosis(i: number) {
    var icd = this.diagnoses.at(i).value.icd;
    var index = this.chronic_medical_conditions.value.findIndex(
      (o: any) => o.icd?.code == icd.code
    );
    if (index > -1)
      this.chronic_medical_conditions.at(index).get('icd')?.reset();

    this.diagnoses.removeAt(i);
    this.diagnostics.removeAt(i);
  }

  onAddMedicine(drug: any) {
    console.log(drug);
    this.medicines.push(SubFG.medicine_fg({ drug }));
    this.medKeyword.reset();
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
  autofillForm(
    storedData: any,
    formGroup: FormGroup,
    formArrayStrs: Array<any>
  ) {
    if (!storedData) return;

    if (storedData) {
      formGroup.patchValue(storedData);
      let local_SubFG: any = SubFG;
      for (let fa_fg of formArrayStrs) {
        for (let value of this.deepValue(storedData, fa_fg.path)) {
          var fg;
          if (fa_fg.fg) {
            fg = local_SubFG[fa_fg.fg]();
            fg.patchValue(value);
          } else {
            fg = new FormControl();
            fg.setValue(value);
          }

          this.deepValueFormArray(formGroup, fa_fg.path).push(fg);
          if (fa_fg.formArrayStrs) {
            this.autofillForm(value, fg, fa_fg.formArrayStrs);
          }
        }
      }
    }
  }

  onClickExisting(i: number) {
    this.onAddDiagnosis(this.icdKeyword.value);
    this.chronic_medical_conditions
      .at(i)
      .get('icd')
      ?.setValue(this.icdKeyword.value);
    this.icdKeyword.reset();
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

  per_system_report_fg = this.objective_fg?.get('per_system_report');

  updatePerSystemReport(fcname: string, value: string) {
    var fa = this.per_system_report_fg?.get(fcname) as FormArray;
    var index = fa.value.findIndex((o: string) => o == value);
    if (index > -1) fa.removeAt(index);
    else fa.push(new FormControl(value));
  }

  // h is in meters
  // w is in kg
  calculateBMI(h: number, w: number) {
    return parseFloat((w / h ** 2).toFixed(4));
  }

  icdDisplayFn(obj: any) {
    return obj ? obj.code + ': ' + obj.desc : '';
  }

  medDisplayFn(obj: any) {
    return obj ? obj.genericName : '';
  }

  updateDiagnostic(indexIcd: any, diagnostic: string) {
    console.log({ indexIcd, diagnostic });
    var fa = this.diagnostics.at(indexIcd)?.get('orders') as FormArray;
    var index = fa.value.findIndex((o: any) => o.name === diagnostic);
    if (index > -1) {
      fa.removeAt(index);
      return;
    }
    var fg = SubFG.order_fg({ name: diagnostic });
    fa.push(fg);
  }

  isOrderChecked(indexIcd: any, diagnostic: string) {
    var fa = this.diagnostics.at(indexIcd)?.get('orders') as FormArray;
    var index = fa.value.findIndex((o: any) => o.name === diagnostic);
    return index > -1;
  }

  isOrderCheckedInOther(indexIcd: any, diagnostic: string) {
    if (this.isOrderChecked(indexIcd, diagnostic)) return false;
    for (let diag of this.diagnostics.controls) {
      var fa = diag.get('orders') as FormArray;
      var index = fa.value.findIndex((o: any) => o.name === diagnostic);
      if (index > -1) return true;
    }
    return false;
  }

  onPinMedicine(meds: any, i: number) {
    var fa = this.diagnoses.at(i).get('medicines') as FormArray;
    var index = fa.value.findIndex(
      (o: any) => o.drug.genericName === meds.value.drug.genericName
    );
    if (index > -1) fa.removeAt(i);
    fa.push(meds);
  }

  isMedicinePinned(meds: any) {
    for (let dx of this.diagnoses.controls) {
      var fa = dx.get('medicines') as FormArray;
      var index = fa.value.findIndex(
        (o: any) => o.drug.genericName === meds.value.drug.genericName
      );
      if (index > -1) return 'pin-success';
    }
    return 'pin-default opacity-50';
  }
}
