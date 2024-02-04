import { SoapParameters } from 'src/app/core/interfaces/SoapParameters.interface';

export const NOTES = [
  {
    obj: (el: any) => {
      return el.encounter;
    },
    notes: [
      {
        header: 'Appointment:',
        lines: [
          {
            cell: (el: any) => {
              return new Date(el.date).toDateString();
            },
          },
          {
            cell: (el: any) => {
              return el.payor + ' | ' + el.atc;
            },
          },
        ],
      },
    ],
  },
  {
    obj: (el: any) => {
      return el.subjective;
    },
    notes: [
      {
        header: 'Chief Complaint:',
        lines: [
          {
            cell: (el: any) => {
              return el.chief_complaint || '-';
            },
          },
        ],
      },
      {
        header: 'Hx of Present Illness:',
        lines: [
          {
            cell: (el: any) => {
              return el.hx_of_present_illness || '-';
            },
          },
        ],
      },
      {
        header: 'Blood Type:',
        lines: [
          {
            cell: (el: any) => {
              return el.blood_type;
            },
          },
        ],
      },
      {
        obj: (el: any) => {
          return el.past_medical_hx;
        },
        notes: [
          {
            header: 'Past Medical Hx:',
            items: (el: any) => {
              return el.chronic_medical_conditions || [];
            },
            lines: [
              {
                cell: (el: any) => {
                  return (
                    el.name +
                    ' (' +
                    el.when +
                    ', Med: ' +
                    (el.medication || 'None') +
                    ')'
                  );
                },
              },
            ],
          },
          {
            header: 'Allergies:',
            items: (el: any) => {
              return el.allergies || [];
            },
            lines: [
              {
                cell: (el: any) => {
                  return (
                    el.name + ' - ' + el.severity + ', Med: ' + el.medication
                  );
                },
              },
            ],
          },
          {
            header: 'Surgeries:',
            items: (el: any) => {
              return el.surgeries || [];
            },
            lines: [
              {
                cell: (el: any) => {
                  return (
                    el.name +
                    ' (' +
                    el.when +
                    ', ' +
                    el.where +
                    ',  ' +
                    el.outcome +
                    ')'
                  );
                },
              },
            ],
          },
          {
            header: 'Medications:',
            items: (el: any) => {
              return el.medications || [];
            },
            lines: [
              {
                cell: (el: any) => {
                  return (
                    el.name +
                    ' (' +
                    el.when +
                    ', ' +
                    el.duration +
                    ',  ' +
                    el.indication +
                    ')'
                  );
                },
              },
            ],
          },
          {
            obj: (el: any) => {
              return el.obgyne;
            },
            notes: [
              {
                header: 'Menarche:',
                showIf: (el: SoapParameters) => {
                  return el.sex === 'Female';
                },
                lines: [
                  {
                    cell: (el: any) => {
                      return el.menarche ? el.menarche + 'y/o' : '';
                    },
                  },
                ],
              },
              {
                header: 'Coitarche:',
                showIf: (el: SoapParameters) => {
                  return el.sex === 'Female';
                },
                lines: [
                  {
                    cell: (el: any) => {
                      return el.coitarche ? el.coitarche + 'y/o' : '';
                    },
                  },
                ],
              },
              {
                header: 'Menopause:',
                showIf: (el: SoapParameters) => {
                  return el.sex === 'Female';
                },
                lines: [
                  {
                    cell: (el: any) => {
                      return el.menopause ? el.menopause + 'y/o' : '';
                    },
                  },
                ],
              },
              {
                obj: (el: any) => {
                  el.menstrual_cycle;
                },
                showIf: (el: SoapParameters) => {
                  return el.sex === 'Female';
                },
                notes: [
                  {
                    header: 'Last Menstrual Period:',
                    showIf: (el: SoapParameters) => {
                      return el.sex === 'Female';
                    },
                    lines: [
                      {
                        cell: (el: any) => {
                          return el?.lmp;
                        },
                      },
                    ],
                  },
                  {
                    header: 'Duration:',
                    showIf: (el: SoapParameters) => {
                      return el.sex === 'Female';
                    },
                    lines: [
                      {
                        cell: (el: any) => {
                          return el?.duration;
                        },
                      },
                    ],
                  },
                  {
                    header: 'Intervals:',
                    showIf: (el: SoapParameters) => {
                      return el.sex === 'Female';
                    },
                    lines: [
                      {
                        cell: (el: any) => {
                          return el?.intervals;
                        },
                      },
                    ],
                  },
                  {
                    header: 'Days:',
                    showIf: (el: SoapParameters) => {
                      return el.sex === 'Female';
                    },
                    lines: [
                      {
                        cell: (el: any) => {
                          return el?.days;
                        },
                      },
                    ],
                  },
                ],
              },
              {
                obj: (el: any) => {
                  return el.pregnancy;
                },
                notes: [
                  {
                    header: 'Gravida:',
                    showIf: (el: SoapParameters) => {
                      return el.sex === 'Female';
                    },
                    lines: [
                      {
                        cell: (el: any) => {
                          return el.gravida;
                        },
                      },
                    ],
                  },
                  {
                    header: 'Parity:',
                    showIf: (el: SoapParameters) => {
                      return el.sex === 'Female';
                    },
                    lines: [
                      {
                        cell: (el: any) => {
                          return el.parity;
                        },
                      },
                    ],
                  },
                  {
                    header: 'Full Term:',
                    showIf: (el: SoapParameters) => {
                      return el.sex === 'Female';
                    },
                    lines: [
                      {
                        cell: (el: any) => {
                          return el.full_term;
                        },
                      },
                    ],
                  },
                  {
                    header: 'Pre Term:',
                    showIf: (el: SoapParameters) => {
                      return el.sex === 'Female';
                    },
                    lines: [
                      {
                        cell: (el: any) => {
                          return el.pre_term;
                        },
                      },
                    ],
                  },
                  {
                    header: 'Abortion:',
                    showIf: (el: SoapParameters) => {
                      return el.sex === 'Female';
                    },
                    lines: [
                      {
                        cell: (el: any) => {
                          return el.abortion;
                        },
                      },
                    ],
                  },
                  {
                    header: 'Living:',
                    showIf: (el: SoapParameters) => {
                      return el.sex === 'Female';
                    },
                    lines: [
                      {
                        cell: (el: any) => {
                          return el.living;
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            header: 'Chronologic OB Hx:',
            showIf: (el: SoapParameters) => {
              return el.sex === 'Female';
            },
            items: (el: any) => {
              return el.chronologic_ob_hxs || [];
            },
            lines: [
              {
                cell: (el: any, index: number) => {
                  return (
                    'G' + (index + 1) + ' (' + el.when + ', ' + el.remarks + ')'
                  );
                },
              },
            ],
          },
          {
            header: 'Birth Control Methods:',
            items: (el: any) => {
              return el.birth_control_methods || [];
            },
            lines: [
              {
                cell: (el: any) => {
                  return (
                    el.name +
                    ' (' +
                    el.when +
                    ', ' +
                    el.duration +
                    ', ' +
                    el.remarks +
                    ')'
                  );
                },
              },
            ],
          },
        ],
      },
      {
        obj: (el: any) => {
          return el.immunization_hx;
        },
        notes: [
          {
            header: 'Childhood Immunization:',
            items: (el: any) => {
              return el.childhood || [];
            },
            lines: [
              {
                cell: (el: any) => {
                  return el.name + ' (' + el.when + ', ' + el.where + ')';
                },
              },
            ],
          },
          {
            header: 'Adulthood Immunization:',
            items: (el: any) => {
              return el.adulthood || [];
            },
            lines: [
              {
                cell: (el: any) => {
                  return el.name + ' (' + el.when + ', ' + el.where + ')';
                },
              },
            ],
          },
          {
            header: 'OB Immunization:',
            items: (el: any) => {
              return el.ob || [];
            },
            lines: [
              {
                cell: (el: any) => {
                  return el.name + ' (' + el.when + ', ' + el.where + ')';
                },
              },
            ],
          },
        ],
      },
      {
        obj: (el: any) => {
          return el.personal_social_hx;
        },
        notes: [
          {
            obj: (el: any) => {
              return el.smoker;
            },
            notes: [
              {
                header: 'Smoking',
                lines: [
                  {
                    cell: (el: any) => {
                      if (el.status === 'No') return el.status;
                      if (el.status === 'Quit')
                        return 'Quit last ' + el.when_quit;
                      return (
                        el.type + ', Total of ' + el.consumption + ' packs.'
                      );
                    },
                  },
                ],
              },
            ],
          },
          {
            obj: (el: any) => {
              return el.alcohol;
            },
            notes: [
              {
                header: 'Alcohol Drinking',
                lines: [
                  {
                    cell: (el: any) => {
                      if (el.status === 'No') return el.status;
                      if (el.status === 'Quit')
                        return 'Quit last ' + el.when_quit;
                      return el.type + ', Consumption: ' + el.consumption;
                    },
                  },
                ],
              },
            ],
          },
          {
            obj: (el: any) => {
              return el.drug;
            },
            notes: [
              {
                header: 'Drug',
                lines: [
                  {
                    cell: (el: any) => {
                      if (el.status === 'No') return el.status;
                      if (el.status === 'Quit')
                        return 'Quit last ' + el.when_quit;
                      return el.type + ', Consumption: ' + el.consumption;
                    },
                  },
                ],
              },
            ],
          },
          {
            obj: (el: any) => {
              return el.sexual_activity;
            },
            notes: [
              {
                header: 'Sexual Activity',
                lines: [
                  {
                    cell: (el: any) => {
                      if (el.status === 'No') return el.status;
                      return el.is_multiple_partner
                        ? 'Multiple Partner'
                        : 'Single Partner';
                    },
                  },
                ],
              },
            ],
          },
          {
            header: 'Physical Activity:',
            items: (el: any) => {
              return el.physical_activities || [];
            },
            lines: [
              {
                cell: (el: any) => {
                  return el.type + ' ' + el.hours_per_week + ' per week';
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
