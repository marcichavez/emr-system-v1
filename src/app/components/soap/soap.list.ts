export const chronic_medical_conditions = [
  'Asthma',
  'Cancer',
  'Cerebrovascular',
  'Coronary Artery',
  'Diabetes Mellitus',
  'Emphysema',
  'Epilepsy/Seizure ',
  'Hepatitis',
  'Hyperlipidemia',
  'Hypertension',
  'Peptic Ulcer',
  'Pneumonia',
  'Thyroid',
  'Pulmonary TB',
  'Extrapulmonary TB',
  'UTI',
  'Mental Illness',
  'Others',
];

export const chronic_medical_conditions_fam = [
  'Allergies',
  'Asthma',
  'Cancer',
  'Cerebrovascular',
  'Coronary Artery',
  'Diabetes Mellitus',
  'Emphysema',
  'Epilepsy/Seizure ',
  'Hepatitis',
  'Hyperlipidemia',
  'Hypertension',
  'Peptic Ulcer',
  'Pneumonia',
  'Thyroid',
  'Pulmonary TB',
  'Extrapulmonary TB',
  'UTI',
  'Mental Illness',
  'Others',
];

export const allergy_severity = ['Mild', 'Moderate', 'Severe'];

export const blood_types = [
  'Unknown',
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
];

export const child_immunization_schedule = [
  {
    vaccine: 'BCG (Bacillus Calmette-Guérin)',
    recommended_age: [{ from: 0, to: 2, unit: 'weeks' }],
  },
  {
    vaccine: 'Hepatitis B',
    recommended_age: [
      { from: 0, to: 2, unit: 'weeks' },
      { from: 4, to: 8, unit: 'weeks' },
      { from: 16, to: 52, unit: 'weeks' },
    ],
  },
  {
    vaccine: 'DTP (Diphtheria, Tetanus, Pertussis)',
    recommended_age: [
      { from: 6, to: 8, unit: 'weeks' },
      { from: 10, to: 16, unit: 'weeks' },
      { from: 14, to: 24, unit: 'weeks' },
      { from: 12, to: 18, unit: 'months' },
      { from: 4, to: 6, unit: 'years' },
    ],
  },
  {
    vaccine: 'Tdap (Tetanus, Diphtheria, Pertussis booster)',
    recommended_age: [{ from: 7, to: 18, unit: 'years' }],
  },
  {
    vaccine: 'Haemophilus influenzae type b (Hib)',
    recommended_age: [
      { from: 6, to: 8, unit: 'weeks' },
      { from: 10, to: 16, unit: 'weeks' },
      { from: 14, to: 24, unit: 'weeks' },
      { from: 12, to: 18, unit: 'months' },
    ],
  },
  {
    vaccine: 'IPV (Inactivated Polio Vaccine)',
    recommended_age: [
      { from: 8, to: 8, unit: 'months' },
      { from: 16, to: 16, unit: 'months' },
      { from: 24, to: 24, unit: 'months' },
      { from: 60, to: 72, unit: 'months' },
      { from: 192, to: 216, unit: 'months' },
    ],
  },
  {
    vaccine: 'Polio (OPV - Oral Polio Vaccine)',
    recommended_age: [
      { from: 8, to: 8, unit: 'months' },
      { from: 16, to: 16, unit: 'months' },
      { from: 24, to: 24, unit: 'months' },
      { from: 60, to: 72, unit: 'months' },
      { from: 192, to: 216, unit: 'months' },
    ],
  },
  {
    vaccine: 'PCV (Pneumococcal Conjugate Vaccine)',
    recommended_age: [
      { from: 8, to: 8, unit: 'months' },
      { from: 16, to: 16, unit: 'months' },
      { from: 24, to: 24, unit: 'months' },
      { from: 48, to: 60, unit: 'months' },
    ],
  },
  {
    vaccine: 'RV (Rotavirus Vaccine)',
    recommended_age: [{ from: 8, to: 24, unit: 'weeks' }],
  },
  {
    vaccine: 'Influenza (Flu)',
    recommended_age: [{ from: 24, to: 240, unit: 'months' }],
  },
  {
    vaccine: 'Measles',
    recommended_age: [{ from: 36, to: 48, unit: 'months' }],
  },
  {
    vaccine: 'JEV (Japanese Encephalitis Vaccine)',
    recommended_age: [{ from: 48, to: 96, unit: 'weeks' }],
  },
  {
    vaccine: 'MMR (Measles, Mumps, Rubella)',
    recommended_age: [
      { from: 36, to: 48, unit: 'months' },
      { from: 192, to: 216, unit: 'months' },
    ],
  },
  {
    vaccine: 'Varicella (Chickenpox)',
    recommended_age: [
      { from: 48, to: 60, unit: 'months' },
      { from: 192, to: 216, unit: 'months' },
    ],
  },
  {
    vaccine: 'Inactivated Hepatitis A',
    recommended_age: [{ from: 96, to: 192, unit: 'weeks' }],
  },
  {
    vaccine: 'Live Hepatitis A',
    recommended_age: [{ from: 144, to: 192, unit: 'weeks' }],
  },
  {
    vaccine: 'HPV (Human Papillomavirus)',
    recommended_age: [
      { from: 576, to: 624, unit: 'weeks' },
      { from: 156, to: 312, unit: 'weeks' },
    ],
  },
];

var purple =
  'Recommended vaccination for adults with an additional risk factor or another indication';
var blue = 'Recommended vaccination based on shared clinical decision-making';

export const adult_immunization_schedule = [
  {
    vaccine: 'COVID-19',
    recommended_age: [
      {
        from: 19,
        to: null,
        unit: 'years',
        notes: '1 or more doses of updated (2023-2024 Formula) vaccine',
      },
    ],
  },

  {
    vaccine: 'Influenza inactivated (IIV4) or Influenza recombinant (RIV4)',
    recommended_age: [
      { from: 19, to: null, unit: 'years', notes: '1 dose annually' },
    ],
  },

  {
    vaccine: 'Influenza live attenuated (LAIV4)',
    recommended_age: [
      { from: 19, to: 49, unit: 'years', notes: '1 dose annually' },
    ],
  },

  {
    vaccine: 'Respiratory Syncytial Virus (RSV)',
    recommended_age: [
      {
        from: 19,
        to: 49,
        unit: 'years',
        notes:
          'Seasonal administration during pregnancy for all pregnant individuals',
      },
      {
        from: 60,
        unit: 'years',
        notes: blue,
      },
    ],
  },

  {
    vaccine: 'Tetanus, diphtheria, pertussis (Tdap or Td)',
    recommended_age: [
      {
        from: 19,
        to: null,
        unit: 'years',
        notes:
          '1 dose Tdap each pregnancy; 1 dose Td/Tdap for wound management. 1 dose Tdap, then Td or Tdap booster every 10 years',
      },
    ],
  },

  {
    vaccine: 'Measles, mumps, rubella (MMR)',
    recommended_age: [
      {
        from: 19,
        to: 64,
        unit: 'years',
        notes:
          '1 or 2 doses depending on indication (if born in 1957 or later)',
      },
      {
        from: 65,
        to: null,
        unit: 'years',
        notes: 'For healthcare personnel.',
      },
    ],
  },

  {
    vaccine: 'Varicella (VAR)',
    recommended_age: [
      {
        from: 19,
        to: 40,
        unit: 'years',
        notes: '2 doses (if born in 1980 or later)',
      },
      {
        from: 41,
        to: null,
        unit: 'years',
        notes: purple,
      },
    ],
  },

  {
    vaccine: 'Zoster recombinant (RZV)',
    recommended_age: [
      {
        from: 19,
        to: 49,
        unit: 'years',
        notes: '2 doses for immunocompromising conditions',
      },
      {
        from: 50,
        to: null,
        unit: 'years',
        notes: '2 doses',
      },
    ],
  },

  {
    vaccine: 'Human papillomavirus (HPV)',
    recommended_age: [
      {
        from: 19,
        to: 26,
        unit: 'years',
        notes:
          '2 or 3 doses depending on age at initial vaccination or condition',
      },
      {
        from: 27,
        to: 45,
        unit: 'years',
        notes: blue,
      },
    ],
  },

  {
    vaccine: 'Pneumococcal (PCV15, PCV20, PPSV23)',
    recommended_age: [
      { from: 19, to: 64, unit: 'years', notes: purple },
      { from: 65, to: null, unit: 'years', notes: blue },
    ],
  },

  {
    vaccine: 'Hepatitis A (HepA)',
    recommended_age: [
      {
        from: 19,
        to: null,
        unit: 'years',
        notes: '2, 3, or 4 doses depending on vaccine',
      },
    ],
  },

  {
    vaccine: 'Hepatitis B (HepB)',
    recommended_age: [
      {
        from: 19,
        to: 55,
        unit: 'years',
        notes: '2, 3, or 4 doses depending on vaccine',
      },
      {
        from: 56,
        to: null,
        unit: 'years',
        notes: '2, 3, or 4 doses depending on condition',
      },
    ],
  },

  {
    vaccine: 'Meningococcal A, C, W, Y (MenACWY)',
    recommended_age: [
      {
        from: 19,
        to: null,
        unit: 'years',
        notes:
          '1 or 2 doses depending on indication. See notes for booster recommendations',
      },
    ],
  },

  {
    vaccine: 'Meningococcal B (MenB)',
    recommended_age: [
      {
        from: 19,
        to: 23,
        unit: 'years',
        notes:
          '2 or 3 doses depending on vaccine and indication. See notes for booster recommendations',
      },
    ],
  },

  {
    vaccine: 'Haemophilus influenzae type b (Hib)',
    recommended_age: [
      {
        from: 19,
        to: null,
        unit: 'years',
        notes: '1 or 3 doses depending on indication',
      },
    ],
  },

  {
    vaccine: 'Mpox',
    recommended_age: [{ from: 19, to: null, unit: 'years', notes: purple }],
  },
];

export const ob_immunization_schedule = [
  {
    vaccine: 'COVID-19',
    recommended_age: [
      {
        from: 19,
        to: null,
        unit: 'years',
        notes: '1 or more doses of updated (2023-2024 Formula) vaccine',
      },
    ],
  },

  {
    vaccine: 'Mpox',
    recommended_age: [{ from: 19, to: null, unit: 'years', notes: purple }],
  },
];

export const per_system_reports = [
  {
    system: 'HEENT',
    findings: [
      'Essentially Normal',
      'Abnormal Pupillary Reaction',
      'CLAD',
      'Dry Mucous Membrane',
      'Sunken Eyeballs',
      'Sunken Fontanelles',
      'Others',
    ],
  },
  {
    system: 'Chest/Breast/Lungs',
    findings: [
      'Essentially Normal',
      'Assymetrical Expansion',
      'Decreased Breath Sounds',
      'Wheezes',
      'Lumps over breasts',
      'Crackles/ Rales',
      'Retractions',
      'Others',
    ],
  },
  {
    system: 'Heart',
    findings: [
      'Essentially Normal',
      'Displaced Apex Beat',
      'Heaves/ Thrills',
      'Irregular rhythm',
      'Muffled Heart Sounds',
      'Murmurs',
      'Pericardial Bulge',
      'Others',
    ],
  },
  {
    system: 'Abdomen',
    findings: [
      'Essentially Normal',
      'Rigid',
      'Tenderness',
      'Hyperactive Bowel Sounds',
      'Palpable mass',
      'Tympanitic/dull abdomen',
      'Uterine contractions',
      'Others',
    ],
  },
  {
    system: 'Genitourinary',
    findings: [
      'Essentially Normal',
      'Blood stained',
      'Cervical dilatation',
      'Abnormal discharge',
      'Others',
    ],
  },
  {
    system: 'DRE',
    findings: [
      'Essentially Normal',
      'Enlarged Prostate',
      'Mass',
      'Hemorrhoids',
      'Pus',
      'Not Applicable',
    ],
  },
];

export const obgyne_hxs_fields = [
  {
    label: 'Menarche',
    fcname: 'menarche',
    placeholder: 'Age',
  },
  { label: 'Coitarche', fcname: 'coitarche', placeholder: 'Age' },
  { label: 'Menopause', fcname: 'menopause', placeholder: 'Age' },
  {
    label: 'Menstrual Cycle',
    fgname: 'menstrual_cycle',
    fcs: [
      { label: 'LMP', fcname: 'lmp', placeholder: 'Last period' },
      { label: 'Duration', fcname: 'duration' },
      { label: 'Intervals', fcname: 'intervals' },
      { label: 'Days', fcname: 'days' },
    ],
  },
  {
    label: 'Pregnancy',
    fgname: 'pregnancy',
    fcs: [
      { label: 'Gravida', fcname: 'gravida' },
      { label: 'Parity', fcname: 'parity' },
      { label: 'Full Term', fcname: 'full_term' },
      { label: 'Pre Term', fcname: 'pre_term' },
      { label: 'Abortion', fcname: 'abortion' },
      { label: 'Living', fcname: 'living' },
    ],
  },
];

export const ros_fields = [
  {
    label: 'Constitutional',
    fcname: 'constitutional',
    choices: [
      'Weight Loss',
      'Fever',
      'Loss of Appetite',
      'Fatigue',
      'Lethargic',
      'Night Sweats',
    ],
  },
  {
    label: 'Integumentary',
    fcname: 'integumentary',
    choices: [
      'Rashes',
      'Lesions',
      'Hair Loss',
      'Changes in Hair Texture',
      'Nail Changes',
      'Dry Skin',
    ],
  },
  {
    label: 'HEENT',
    fcname: 'heent',
    choices: [
      'Headaches',
      'Vision Changes',
      'Hearing Loss',
      'Nasal Congestion',
      'Sore Throat',
      'Dizziness',
    ],
  },
  {
    label: 'Respiratory',
    fcname: 'respiratory',
    choices: [
      'Shortness of Breath',
      'Chest Pain',
      'Cough',
      'Wheezing',
      'Sputum Production',
      'Blood in Sputum',
    ],
  },
  {
    label: 'Cardiovascular',
    fcname: 'cardiovascular',
    choices: [
      'Chest Pain',
      'Palpitations',
      'Swelling in Extremities',
      'High Blood Pressure',
      'Shortness of Breath on Exertion',
      'Irregular Heartbeat',
    ],
  },
  {
    label: 'Gastrointestinal',
    fcname: 'gastrointestinal',
    choices: [
      'Abdominal Pain',
      'Nausea',
      'Vomiting',
      'Bowel Changes',
      'Abdominal Distension',
      'Bloody Stool',
    ],
  },
  {
    label: 'Genitourinary',
    fcname: 'genitourinary',
    choices: [
      'Dysuria',
      'Hematuria',
      'Urinary Changes',
      'Frequency of Urination',
      'Urgency of Urination',
      'Incontinence',
    ],
  },
  {
    label: 'Menstrual Hx',
    fcname: 'menstrual_hx',
    choices: [
      'Irregular Cycles',
      'Excessive Bleeding',
      'Painful Menstruation',
      'Menstrual Clots',
      'Premenstrual Symptoms',
      'Missed Periods',
    ],
  },
  {
    label: 'Musculoskeletal',
    fcname: 'musculoskeletal',
    choices: [
      'Joint Pain',
      'Stiffness',
      'Swelling',
      'Decreased Range of Motion',
      'Muscle Weakness',
      'Joint Deformity',
    ],
  },
  {
    label: 'Neurological',
    fcname: 'neurological',
    choices: [
      'Headaches',
      'Seizures',
      'Changes in Coordination',
      'Numbness or Tingling',
      'Memory Changes',
      'Dizziness or Lightheadedness',
    ],
  },
  {
    label: 'Psychiatric',
    fcname: 'psychiatric',
    choices: [
      'Depression',
      'Anxiety',
      'Sleep Disturbance',
      'Irritability',
      'Mood Swings',
      'Difficulty Concentrating',
    ],
  },
  {
    label: 'Endocrine',
    fcname: 'endocrine',
    choices: [
      'Excessive Thirst',
      'Hunger',
      'Changes in Weight',
      'Heat or Cold Intolerance',
      'Sweating',
      'Tremors',
    ],
  },
  {
    label: 'Hematologic Lymphatic',
    fcname: 'hematologic_lymphatic',
    choices: [
      'Hx of Bleeding Disorder',
      'Easy Bruising',
      'Swollen Lymph Nodes',
      'Night Sweats',
      'Unexplained Weight Loss',
      'Frequent Infections',
    ],
  },
];

export const objective_fields = [
  {
    label: 'General',
    fgname: 'general',
    fcs: [
      {
        label: 'Appearance',
        fcname: 'appearance',
      },
      {
        label: 'Behaviour',
        fcname: 'behaviour',
      },
      {
        label: 'Level of Consciousness',
        fcname: 'level_of_consciousness',
      },
    ],
  },
  {
    label: 'Vital Signs',
    fgname: 'vital_sigs',
    fcs: [
      {
        label: 'Blood Pressure',
        fcname: 'bp',
      },
      {
        label: 'Heart Rate',
        fcname: 'hr',
      },
      {
        label: 'Respiratory Rate',
        fcname: 'rr',
      },
      {
        label: 'Temperature',
        fcname: 'temp',
      },
    ],
  },
  {
    label: 'Anthropometrics',
    fgname: 'anthropometrics',
    fcs: [
      {
        label: 'Height',
        fcname: 'height',
      },
      {
        label: 'Weight',
        fcname: 'weight',
      },
      {
        label: 'BMI',
        fcname: 'bmi',
      },
      {
        label: 'Waist and Hip Circ',
        fcname: 'waist_and_hip',
      },
      {
        label: 'MUAC',
        fcname: 'muac',
      },
      {
        label: 'Head Circ',
        fcname: 'head_circ',
      },
      {
        label: 'Waist Circ',
        fcname: 'waist_circ',
      },
      {
        label: 'Hips Circ',
        fcname: 'hips_circ',
      },
      {
        label: 'Limb Circ',
        fcname: 'limb_circ',
      },
      {
        label: 'Skin Fold Thickness',
        fcname: 'skin_fold',
      },
    ],
  },
  {
    label: 'Per System Report',
    fgname: 'per_system_report',
    fcs: [
      {
        label: 'HEENT',
        fcname: 'heent',
      },
      {
        label: 'Chest',
        fcname: 'chest',
      },
      {
        label: 'Heart',
        fcname: 'heart',
      },
      {
        label: 'Abdomen',
        fcname: 'abdomen',
      },
      {
        label: 'Genitourinary',
        fcname: 'genitourinary',
      },
      {
        label: 'DRE',
        fcname: 'dre',
      },
    ],
  },
];

export const formArrays = [
  {
    fa: 'chronic_medical_conditions',
    fg: 'chronic_medical_condition_fg',
    path: 'subjective.past_medical_hx.chronic_medical_conditions',
  },
  {
    fa: 'allergies',
    fg: 'allergy_fg',
    path: 'subjective.past_medical_hx.allergies',
  },
  {
    fa: 'surgeries',
    fg: 'surgery_fg',
    path: 'subjective.past_medical_hx.surgeries',
  },
  {
    fa: 'medications',
    fg: 'medication_fg',
    path: 'subjective.past_medical_hx.medications',
  },
  {
    fa: 'chronologic_ob_hxs',
    fg: 'chronologic_ob_hx_fg',
    path: 'subjective.past_medical_hx.chronologic_ob_hxs',
  },
  {
    fa: 'birth_control_methods',
    fg: 'birth_control_methods_fg',
    path: 'subjective.past_medical_hx.birth_control_methods',
  },
  {
    fa: 'family_medical_hx',
    fg: 'family_medical_hx_fg',
    path: 'subjective.family_medical_hx',
  },
  {
    fa: 'physical_activities',
    fg: 'physical_activity_fg',
    path: 'subjective.personal_social_hx.physical_activities',
  },
  {
    fa: 'dietary_hx',
    fg: 'dietary_hx_fg',
    path: 'subjective.personal_social_hx.dietary_hx',
  },
  {
    fa: 'carbonated_drinks',
    fg: 'carbonated_drink_fg',
    path: 'subjective.personal_social_hx.carbonated_drinks',
  },

  {
    fa: 'childhood',
    fg: 'immunization_hx_fg',
    path: 'subjective.immunization_hx.childhood',
  },
  {
    fa: 'adulthood',
    fg: 'immunization_hx_fg',
    path: 'subjective.immunization_hx.adulthood',
  },
  {
    fa: 'ob',
    fg: 'immunization_hx_fg',
    path: 'subjective.immunization_hx.ob',
  },
  {
    fa: 'diagnoses',
    fg: 'diagnosis_fg',
    path: 'assessment.diagnoses',
  },

  {
    fa: 'constitutional',
    path: 'subjective.review_of_system.constitutional',
  },

  {
    fa: 'integumentary',
    path: 'subjective.review_of_system.integumentary',
  },

  {
    fa: 'heent',
    path: 'subjective.review_of_system.heent',
  },

  {
    fa: 'respiratory',
    path: 'subjective.review_of_system.respiratory',
  },

  {
    fa: 'cardiovascular',
    path: 'subjective.review_of_system.cardiovascular',
  },
  {
    fa: 'gastrointestinal',
    path: 'subjective.review_of_system.gastrointestinal',
  },
  {
    fa: 'genitourinary',
    path: 'subjective.review_of_system.genitourinary',
  },
  {
    fa: 'menstrual_hx',
    path: 'subjective.review_of_system.menstrual_hx',
  },
  {
    fa: 'musculoskeletal',
    path: 'subjective.review_of_system.musculoskeletal',
  },
  {
    fa: 'neurological',
    path: 'subjective.review_of_system.neurological',
  },
  {
    fa: 'psychiatric',
    path: 'subjective.review_of_system.psychiatric',
  },
  {
    fa: 'endocrine',
    path: 'subjective.review_of_system.endocrine',
  },
  {
    fa: 'hematologic_lymphatic',
    path: 'subjective.review_of_system.hematologic_lymphatic',
  },
];

export const DIAGNOSIS_STATUSES = ['Uncontrolled', 'Controlled', 'Resolved'];
