import { EncounterStatus } from '../constants/ENCOUNTER_STATUS.constant';
import { Payor } from '../constants/PAYORS.constant';
import { PlaceOfService } from '../constants/PLACE_OF_SERVICES.constant';

export interface Encounter {
  payorType: Payor;
  atc: string;
  appointmentDate: Date;
  chiefComplaint: string;
  placeOfService: PlaceOfService;
  soap: any; // todo for later
  vitals: {
    diastolic: number;
    systolic: number;
    heartRate: number;
    respiratoryRate: number;
    temperature: number;
    height: number;
    weight: number;
  };
  encounterStatus: EncounterStatus;

  //   status: {
  //     type: String;
  //     default: STATUS.ACTIVE;
  //     enum: STATUS_ARRAY;
  //   };

  //   _doctorId: {
  //     type: mongoose.Schema.Types.ObjectId;
  //     ref: 'User';
  //   };
  //   _patientId: {
  //     type: mongoose.Schema.Types.ObjectId;
  //     required: true;
  //     ref: 'Patient';
  //   };
  //   _tenantId: {
  //     type: mongoose.Schema.Types.ObjectId;
  //     ref: 'User';
  //   };
}
