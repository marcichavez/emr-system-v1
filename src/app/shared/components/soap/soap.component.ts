import { Component, OnInit, Input } from '@angular/core';
import { soap, subjective } from './soap.config';
import * as SubFG from './soap.config-fg';
import * as LIST from './soap.list';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { IcdApiService } from 'src/app/core/api/icd-api/icd-api.service';
import { Observable } from 'rxjs';
import { InventoryApiService } from 'src/app/core/api/inventory-api/inventory-api.service';
import { FormHelperService } from 'src/app/core/helpers/form-helper/form-helper.service';

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
  icdFilteredOptions!: Observable<any>;
  icdKeyword = new FormControl();

  medFilteredOptions!: Observable<any>;
  medKeyword = new FormControl();

  constructor(
    private icdService: IcdApiService,
    private medService: InventoryApiService,
    private formHelper: FormHelperService
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

  subjective = (this.soapForm.get('subjective') || subjective) as FormGroup;

  ngOnInit(): void {
    if (localStorage.getItem('soap')) {
      var soap = JSON.parse(localStorage.getItem('soap') || '{}');
      this.formHelper.SubFG = SubFG;
      this.formHelper.autofillForm(soap, this.soapForm, this.fa_fgs);
    }

    this.soapForm.valueChanges.subscribe((o) => {
      localStorage.setItem('soap', JSON.stringify(this.soapForm.value));
    });
  }

  // assessment_fg = this.soapForm.get('assessment') as FormGroup;

  // get diagnoses() {
  //   return this.assessment_fg.get('diagnoses') as FormArray;
  // }

  // plan_fg = this.soapForm.get('plan') as FormGroup;

  // get diagnostics() {
  //   return this.plan_fg.get('diagnostics') as FormArray;
  // }

  // get medicines() {
  //   return this.plan_fg.get('medicines') as FormArray;
  // }

  // onAddDiagnosis(icd: any) {
  //   console.log(this.diagnoses.value);
  //   var index = this.diagnoses.value.findIndex(
  //     (o: any) => o.icd.code === icd.code
  //   );
  //   if (index > -1) return;
  //   this.diagnoses.push(SubFG.diagnosis_fg({ icd }));
  //   this.diagnostics.push(SubFG.diagnostic_fg({ icd }));
  // }

  // onRemoveDiagnosis(i: number) {
  //   var icd = this.diagnoses.at(i).value.icd;
  //   var index = this.chronic_medical_conditions.value.findIndex(
  //     (o: any) => o.icd?.code == icd.code
  //   );
  //   if (index > -1)
  //     this.chronic_medical_conditions.at(index).get('icd')?.reset();

  //   this.diagnoses.removeAt(i);
  //   this.diagnostics.removeAt(i);
  // }

  // onAddMedicine(drug: any) {
  //   console.log(drug);
  //   this.medicines.push(SubFG.medicine_fg({ drug }));
  //   this.medKeyword.reset();
  // }

  // onRemoveMedicine(i: number) {
  //   this.medicines.removeAt(i);
  // }

  // showValue() {
  //   console.log({
  //     soap: this.soapForm,
  //     parameters: this.parameters,
  //   });
  // }

  fa_fgs = LIST.formArrays;

  // onClickExisting(i: number) {
  //   this.onAddDiagnosis(this.icdKeyword.value);
  //   this.chronic_medical_conditions
  //     .at(i)
  //     .get('icd')
  //     ?.setValue(this.icdKeyword.value);
  //   this.icdKeyword.reset();
  // }

  // updateSpecify(i: number) {
  //   this.diagnoses
  //     .at(i)
  //     .get('isSpecify')
  //     ?.setValue(!this.diagnoses.at(i).get('isSpecify')?.value);
  //   if (this.diagnoses.at(i).get('isSpecify')?.value) {
  //     this.diagnoses.at(i).get('specify')?.setValidators(Validators.required);
  //   }
  // }

  // icdDisplayFn(obj: any) {
  //   return obj ? obj.code + ': ' + obj.desc : '';
  // }

  // medDisplayFn(obj: any) {
  //   return obj ? obj.genericName : '';
  // }

  // updateDiagnostic(indexIcd: any, diagnostic: string) {
  //   console.log({ indexIcd, diagnostic });
  //   var fa = this.diagnostics.at(indexIcd)?.get('orders') as FormArray;
  //   var index = fa.value.findIndex((o: any) => o.name === diagnostic);
  //   if (index > -1) {
  //     fa.removeAt(index);
  //     return;
  //   }
  //   var fg = SubFG.order_fg({ name: diagnostic });
  //   fa.push(fg);
  // }

  // isOrderChecked(indexIcd: any, diagnostic: string) {
  //   var fa = this.diagnostics.at(indexIcd)?.get('orders') as FormArray;
  //   var index = fa.value.findIndex((o: any) => o.name === diagnostic);
  //   return index > -1;
  // }

  // isOrderCheckedInOther(indexIcd: any, diagnostic: string) {
  //   if (this.isOrderChecked(indexIcd, diagnostic)) return false;
  //   for (let diag of this.diagnostics.controls) {
  //     var fa = diag.get('orders') as FormArray;
  //     var index = fa.value.findIndex((o: any) => o.name === diagnostic);
  //     if (index > -1) return true;
  //   }
  //   return false;
  // }

  // onPinMedicine(meds: any, i: number) {
  //   var fa = this.diagnoses.at(i).get('medicines') as FormArray;
  //   var index = fa.value.findIndex(
  //     (o: any) => o.drug.genericName === meds.value.drug.genericName
  //   );
  //   if (index > -1) fa.removeAt(i);
  //   fa.push(meds);
  // }

  // isMedicinePinned(meds: any) {
  //   for (let dx of this.diagnoses.controls) {
  //     var fa = dx.get('medicines') as FormArray;
  //     var index = fa.value.findIndex(
  //       (o: any) => o.drug.genericName === meds.value.drug.genericName
  //     );
  //     if (index > -1) return 'pin-success';
  //   }
  //   return 'pin-default opacity-50';
  // }
}
