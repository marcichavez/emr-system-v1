import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export function chronic_medical_condition_fg(name: string = '') {
  return new FormGroup({
    name: new FormControl(name, [Validators.required]),
    icd: new FormControl(),
    when: new FormControl('', [Validators.required]),
    medication: new FormControl('', [Validators.required]),
    diagnostic_performed: new FormControl('', [Validators.required]),
    is_existing: new FormControl(false),
  });
}

export function allergy_fg() {
  return new FormGroup({
    name: new FormControl('', [Validators.required]),
    medication: new FormControl('', [Validators.required]),
    severity: new FormControl('', [Validators.required]),
  });
}
export function surgery_fg() {
  return new FormGroup({
    name: new FormControl('', [Validators.required]),
    when: new FormControl('', [Validators.required]),
    where: new FormControl('', [Validators.required]),
    outcome: new FormControl('', [Validators.required]),
  });
}

export function medication_fg() {
  return new FormGroup({
    name: new FormControl('', [Validators.required]),
    when: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    indication: new FormControl('', [Validators.required]),
  });
}

export function chronologic_ob_hx_fg() {
  return new FormGroup({
    name: new FormControl('', [Validators.required]),
    when: new FormControl('', [Validators.required]),
    remarks: new FormControl('', [Validators.required]),
  });
}

export function birth_control_methods_fg() {
  return new FormGroup({
    name: new FormControl('', [Validators.required]),
    when: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    remarks: new FormControl('', [Validators.required]),
  });
}

// immunization hx

export function immunization_hx_fg() {
  return new FormGroup({
    name: new FormControl('', [Validators.required]),
    when: new FormControl('', [Validators.required]),
    where: new FormControl('', [Validators.required]),
  });
}

export function physical_activity_fg() {
  return new FormGroup({
    type: new FormControl('', [Validators.required]),
    hours_per_week: new FormControl('', [Validators.required]),
  });
}

export function dietary_hx_fg() {
  return new FormGroup({
    type: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
  });
}

export function carbonated_drink_fg() {
  return new FormGroup({
    type: new FormControl('', [Validators.required]),
    hours_per_week: new FormControl('', [Validators.required]),
  });
}

export function family_medical_hx_fg() {
  return new FormGroup({
    name: new FormControl(''),
    relation: new FormControl(''),
    past_medical_hx: new FormGroup({
      chronic_medical_conditions: new FormArray([]),
    }),
  });
}

export function diagnosis_fg(value?: any) {
  var fg = new FormGroup({
    icd: new FormControl('', [Validators.required]),
    specify: new FormControl(''),
    isSpecify: new FormControl(false),
    status: new FormControl('', [Validators.required]),
    medicines: new FormArray([]), // pin diagnosis
  });
  if (value) fg.patchValue(value);
  return fg;
}

export function medicine_fg(value?: any) {
  var fg = new FormGroup({
    drug: new FormControl(),
    dose: new FormControl(),
    preparation: new FormControl(),
    dispense_no: new FormControl(),
    sig: new FormControl(),
  });
  if (value) fg.patchValue(value);
  return fg;
}

export function diagnostic_fg(value?: any) {
  var fg = new FormGroup({
    icd: new FormControl(''),
    orders: new FormArray([]),
  });
  if (value) fg.patchValue(value);
  return fg;
}

export function order_fg(value?: any) {
  var fg = new FormGroup({
    name: new FormControl(''),
  });
  if (value) fg.patchValue(value);
  return fg;
}