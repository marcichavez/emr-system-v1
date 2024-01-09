import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export const soap = new FormGroup({
  subjective: new FormGroup({
    chief_complaint: new FormControl('', [Validators.required]),
    hx_or_present_illness: new FormControl('', [Validators.required]),
    blood_type: new FormControl(''),
    past_medical_hx: new FormGroup({
      chronic_medical_conditions: new FormArray([]),
      allergies: new FormArray([]),
      surgeries: new FormArray([]),
      medications: new FormArray([]),
      obgyne: new FormGroup({
        menarche: new FormControl(''),
        coitarche: new FormControl(''),
        menopause: new FormControl(''),
        menstrual_cycle: new FormGroup({
          lmp: new FormControl(''),
          duration: new FormControl(''),
          intervals: new FormControl(''),
          days: new FormControl(''),
        }),
        pregnancy: new FormGroup({
          gravida: new FormControl(''),
          parity: new FormControl(''),
          full_term: new FormControl(''),
          pre_term: new FormControl(''),
          abortion: new FormControl(''),
          living: new FormControl(''),
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
        status: new FormControl(''),
        type: new FormControl(''),
        consumption: new FormControl(''), // per year
      }),
      alcohol: new FormGroup({
        status: new FormControl(''),
        type: new FormControl(''),
        consumption: new FormControl(''), // monthly
      }),
      drug: new FormGroup({
        status: new FormControl(''),
        type: new FormControl(''),
        consumption: new FormControl(''), // monthly
      }),
      sexual_activity: new FormGroup({
        status: new FormControl(''),
        is_multiple_partner: new FormControl(''),
      }),
      physical_activity: new FormArray([]),
      dietary_hx: new FormArray([]),
      carbonated_drinks: new FormArray([]),
      living_condition: new FormGroup({
        living_area: new FormControl('', [Validators.required]),
        type_of_house: new FormControl('', [Validators.required]),
        how_populated: new FormControl('', [Validators.required]),
        ventilation: new FormControl('', [Validators.required]),
        water: new FormControl('', [Validators.required]),
        toilet: new FormControl('', [Validators.required]),
        sewage: new FormControl('', [Validators.required]),
        garbage_disposal: new FormControl('', [Validators.required]),
      }),
      occupational_hx: new FormGroup({
        work: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        hazards: new FormControl('', [Validators.required]),
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
  }),
  objective: new FormGroup({
    general: new FormGroup({
      appearance: new FormControl(''),
      behaviour: new FormControl(''),
      level_of_consciousness: new FormControl(''),
    }),
    vital_sigs: new FormGroup({
      bp: new FormControl(''),
      hr: new FormControl(''),
      rr: new FormControl(''),
      temp: new FormControl(''),
    }),
    anthropometrics: new FormGroup({
      height: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required]),
      bmi: new FormControl(''),
      waist_and_hip: new FormControl(),
      muac: new FormControl(''),
      head_circ: new FormControl(''),
      waist_circ: new FormControl(''),
      hips_circ: new FormControl(''),
      limb_circ: new FormControl(''),
      skin_fold: new FormControl(''),
    }),
    per_system_report: new FormGroup({
      heent: new FormControl(''),
      chest: new FormControl(''),
      heart: new FormControl(''),
      abdomen: new FormControl(''),
      genitourinary: new FormControl(''),
      dre: new FormControl(''),
    }),
  }),
  assessment: new FormGroup({}),
  plan: new FormGroup({}),
});

// past medical hx
