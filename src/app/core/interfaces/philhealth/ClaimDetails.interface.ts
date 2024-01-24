import { PGender } from './PGender.interface';
import { PPatientIs } from './PPatientIs.interface';
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
  pMemberBirthDate: string; //MM-DD-YY
  pMailingAddress: string;
  pZipCode: string;
  pPatientIs: PPatientIs;

  // admission dates
  pAdmissionDate: Date; //MM-DD-YY
  pDischargeDate: Date; //MM-DD-YY

  //disregarded if pMemberShipType === 'M'
  pPatientLastName?: string;
  pPatientFirstName?: string;
  pPatientMiddleName?: string;

  // required
  pPatientSuffix: string;
  pPatientBirthDate: string; //MM-DD-YY
  pPatientGender: PGender;

  // membership type
  pMemberShipType: string;

  //if pMemberShipType === 'S' || 'G'
  pPEN?: string;
  pEmployerName?: string;

  //leave blank if no surgery is done
  pRVS?: string;

  //
  pTotalAmountActual: string; // #######.##
  pTotalAmountClaimed: string; // #######.##
  pIsFinal: 0 | 1;
}
