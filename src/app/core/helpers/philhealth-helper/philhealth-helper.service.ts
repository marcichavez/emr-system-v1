import { Injectable } from '@angular/core';
import { ClaimDetails } from '../../interfaces/philhealth/ClaimDetails.interface';

@Injectable({
  providedIn: 'root',
})
export class PhilhealthHelperService {
  constructor() {}

  _validateDataformat(claimDetails: ClaimDetails) {
    var errors = [];

    // PhilHealth Identification Number – a unique 12 digit number assigned to a member.
    if (claimDetails.pPIN.length != 12)
      errors.push('Invalid PIN number format');

    // Any value consisting of : A to Z, Ñ. Can include a space in between characters
    if (!this._isAllAlphabet(claimDetails.pMemberFirstName))
      errors.push('Invalid Character in Member Firstname');

    if (!this._isAllAlphabet(claimDetails.pMemberLastName))
      errors.push('Invalid Character in Member Lastname');

    if (
      claimDetails.pMemberMiddleName &&
      !this._isAllAlphabet(claimDetails.pMemberMiddleName)
    )
      errors.push('Invalid Character in Member Middlename');

    // Required if pPatientIs === M
    if (claimDetails.pPatientIs !== 'M') {
      if (!claimDetails.pPatientFirstName)
        errors.push('Patient Name is Required');

      if (
        claimDetails.pPatientFirstName &&
        !this._isAllAlphabet(claimDetails.pPatientFirstName)
      )
        errors.push('Invalid Character in Patient First Name');

      if (!claimDetails.pPatientLastName)
        errors.push('Patient Name is Required');

      if (
        claimDetails.pPatientLastName &&
        !this._isAllAlphabet(claimDetails.pPatientLastName)
      )
        errors.push('Invalid Character in Patient Last Name');

      if (
        claimDetails.pMemberMiddleName &&
        !this._isAllAlphabet(claimDetails.pMemberMiddleName)
      )
        errors.push('Invalid Character in Patient Middle Name');
    }

    // Required if pMemberShipType === S | G
    if (['S', 'G'].includes(claimDetails.pMemberShipType)) {
      if (!claimDetails.pPEN)
        errors.push('Philhealth Employer Number is required');

      if (!claimDetails.pEmployerName) errors.push('Employer Name is required');
    }

    return errors;
  }

  private _isAllAlphabet(str: string) {
    return /^[a-zA-Z]+$/.test(str);
  }
}
