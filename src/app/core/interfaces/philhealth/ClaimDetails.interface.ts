import { PGender } from './PGender.interface';
export interface ClaimDetails {
  // from facility detail given by philhealth
  pUserName: string; // facility
  pUserPassword: string; // facility
  pHospitalCode: string; // facility

  // member details
  pPIN: string; //
  pMemberLastName: string;
  pMemberFirstName: string;
  pMemberMiddleName: string;
  pMemberSuffix?: string;
  pMemberBirthDate: Date; //MM-DD-YY
  pMailingAddress: string;
  pZipCode: string;
  pPatientIs: 'M' | 'S' | 'C' | 'P';

  pAdmissionDate: Date; //MM-DD-YY
  pDischargeDate: Date; //MM-DD-YY

  pPatientLastName?: string;
  pPatientFirstName?: string;
  pPatientMiddleName?: string;

  pPatientSuffix: string;
  pPatientBirthDate: Date; //MM-DD-YY
  pPatientGender: PGender;

  pMemberShipType: 'S' | 'G' | 'I' | 'NS' | 'NO' | 'PS' | 'PG';

  pPEN?: string;
  pEmployerName?: string;

  pRVS?: string;

  pTotalAmountActual: number;
  pTotalAmountClaimed: number;
  pIsFinal: 0 | 1;
}
