import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export const subjective = new FormGroup({
  chief_complaint: new FormControl(null, [Validators.required]),
  hx_of_present_illness: new FormControl(null, [Validators.required]),
  blood_type: new FormControl(null),
  past_medical_hx: new FormGroup({
    chronic_medical_conditions: new FormArray([]),
    allergies: new FormArray([]),
    surgeries: new FormArray([]),
    medications: new FormArray([]),
    obgyne: new FormGroup({
      menarche: new FormControl(null),
      coitarche: new FormControl(null),
      menopause: new FormControl(null),
      menstrual_cycle: new FormGroup({
        lmp: new FormControl(null),
        duration: new FormControl(null),
        intervals: new FormControl(null),
        days: new FormControl(null),
      }),
      pregnancy: new FormGroup({
        gravida: new FormControl(null),
        parity: new FormControl(null),
        full_term: new FormControl(null),
        pre_term: new FormControl(null),
        abortion: new FormControl(null),
        living: new FormControl(null),
      }),
    }),
    chronologic_ob_hxs: new FormArray([]),
    birth_control_methods: new FormArray([]),
  }),
  immunization_hx: new FormGroup({
    childhood: new FormArray([]),
    adulthood: new FormArray([]),
    ob: new FormArray([]),
  }),
  family_medical_hx: new FormArray([]),
  personal_social_hx: new FormGroup({
    smoker: new FormGroup({
      status: new FormControl(null),
      type: new FormControl(null),
      sticks_day: new FormControl(null),
      no_years: new FormControl(null),
      consumption: new FormControl(null), // per year
      when_quit: new FormControl(null),
    }),
    alcohol: new FormGroup({
      status: new FormControl(null),
      type: new FormControl(null),
      consumption: new FormControl(null), // monthly
      when_quit: new FormControl(null),
    }),
    drug: new FormGroup({
      status: new FormControl(null),
      type: new FormControl(null),
      consumption: new FormControl(null), // monthly
      when_quit: new FormControl(null),
    }),
    sexual_activity: new FormGroup({
      status: new FormControl(null),
      is_multiple_partner: new FormControl(false),
    }),
    physical_activities: new FormArray([]),
    dietary_hx: new FormArray([]),
    carbonated_drinks: new FormArray([]),
    living_condition: new FormGroup({
      living_area: new FormControl(null, [Validators.required]),
      type_of_house: new FormControl(null, [Validators.required]),
      how_populated: new FormControl(null, [Validators.required]),
      ventilation: new FormControl(null, [Validators.required]),
      water: new FormControl(null, [Validators.required]),
      toilet: new FormControl(null, [Validators.required]),
      sewage: new FormControl(null, [Validators.required]),
      garbage_disposal: new FormControl(null, [Validators.required]),
    }),
    occupational_hx: new FormGroup({
      work: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      hazards: new FormControl(null, [Validators.required]),
    }),
  }),
  review_of_system: new FormGroup({
    constitutional: new FormArray([]),
    integumentary: new FormArray([]),
    heent: new FormArray([]),
    respiratory: new FormArray([]),
    cardiovascular: new FormArray([]),
    gastrointestinal: new FormArray([]),
    genitourinary: new FormArray([]),
    menstrual_hx: new FormArray([]),
    musculoskeletal: new FormArray([]),
    neurological: new FormArray([]),
    psychiatric: new FormArray([]),
    endocrine: new FormArray([]),
    hematologic_lymphatic: new FormArray([]),
  }),
});

export const objective = new FormGroup({
  general: new FormGroup({
    appearance: new FormControl(null),
    behaviour: new FormControl(null),
    level_of_consciousness: new FormControl(null),
  }),
  vital_sigs: new FormGroup({
    bp: new FormControl(null),
    hr: new FormControl(null),
    rr: new FormControl(null),
    temp: new FormControl(null),
  }),
  anthropometrics: new FormGroup({
    height: new FormControl(null, [Validators.required]),
    weight: new FormControl(null, [Validators.required]),
    bmi: new FormControl(null),
    waist_and_hip: new FormControl(),
    muac: new FormControl(null),
    head_circ: new FormControl(null),
    waist_circ: new FormControl(null),
    hips_circ: new FormControl(null),
    limb_circ: new FormControl(null),
    skin_fold: new FormControl(null),
  }),
  per_system_report: new FormGroup({
    heent: new FormArray([]),
    chest: new FormArray([]),
    heart: new FormArray([]),
    abdomen: new FormArray([]),
    genitourinary: new FormArray([]),
    dre: new FormArray([]),
  }),
});

export const assessment = new FormGroup({
  remarks: new FormControl(null),
  diagnoses: new FormArray([]),
});

export const plan = new FormGroup({
  notes: new FormControl(),
  diagnostics: new FormArray([]),
  medicines: new FormArray([]),
});

export const soap = new FormGroup({
  subjective: subjective,
  objective: objective,
  assessment: assessment,
  plan: plan,
});
// past medical hx
