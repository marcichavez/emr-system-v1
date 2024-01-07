import { Component, OnInit } from '@angular/core';
import { soap } from './soap.config';
import * as SubFG from './soap.config-fg';
import * as LIST from './soap.list';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-soap',
  templateUrl: './soap.component.html',
  styleUrls: ['./soap.component.scss'],
})
export class SoapComponent implements OnInit {
  LIST = LIST;
  soapForm = soap;

  constructor() {}

  ngOnInit(): void {}

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

  update_selected_adulthood(vaccine: string) {
    console.log(vaccine);
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
    console.log(vaccine);
    var index = this.childhood.value.findIndex((o: any) => o.name == vaccine);

    if (index == -1) {
      var fg = SubFG.immunization_hx_fg();
      fg.get('name')?.setValue(vaccine);
      this.childhood.push(fg);
    } else {
      this.childhood.removeAt(index);
    }
  }

  get chronic_medical_conditions() {
    return (
      (this.soapForm.get('subjective') as FormGroup).get(
        'past_medical_hx'
      ) as FormGroup
    ).get('chronic_medical_conditions') as FormArray;
  }

  get allergies() {
    return (
      (this.soapForm.get('subjective') as FormGroup).get(
        'past_medical_hx'
      ) as FormGroup
    ).get('allergies') as FormArray;
  }

  get surgeries() {
    return (
      (this.soapForm.get('subjective') as FormGroup).get(
        'past_medical_hx'
      ) as FormGroup
    ).get('surgeries') as FormArray;
  }

  get medications() {
    return (
      (this.soapForm.get('subjective') as FormGroup).get(
        'past_medical_hx'
      ) as FormGroup
    ).get('medications') as FormArray;
  }

  get chronologic_ob_hxs() {
    return (
      (this.soapForm.get('subjective') as FormGroup).get(
        'past_medical_hx'
      ) as FormGroup
    ).get('chronologic_ob_hxs') as FormArray;
  }

  get birth_control_methods() {
    return (
      (this.soapForm.get('subjective') as FormGroup).get(
        'past_medical_hx'
      ) as FormGroup
    ).get('birth_control_methods') as FormArray;
  }

  get childhood() {
    return (
      (this.soapForm.get('subjective') as FormGroup).get(
        'immunization_hx'
      ) as FormGroup
    ).get('childhood') as FormArray;
  }

  get adulthood() {
    return (
      (this.soapForm.get('subjective') as FormGroup).get(
        'immunization_hx'
      ) as FormGroup
    ).get('adulthood') as FormArray;
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

  showValue() {
    console.log({
      soap: this.soapForm,
    });
    this.chronic_medical_conditions.at(0).get('when')?.setValue('Yes');
  }

  isChronicSelected(disease: string) {
    return (
      this.chronic_medical_conditions.value.findIndex(
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
}
