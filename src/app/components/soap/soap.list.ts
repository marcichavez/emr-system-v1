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

export const blood_types = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

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
