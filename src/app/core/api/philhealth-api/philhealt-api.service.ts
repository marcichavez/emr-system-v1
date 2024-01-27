import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { ClaimDetails } from '../../interfaces/philhealth/ClaimDetails.interface';
import { PhilhealthHelperService } from '../../helpers/philhealth-helper/philhealth-helper.service';
import {
  IS_CLAIM_ELIGIBLE_NO,
  IS_CLAIM_ELIGIBLE_YES,
} from '../../mocks/data/fake-response';
import { PVU } from '../../interfaces/philhealth/PVU.interface';
import { MASTERLIST } from '../../mocks/data/masterlist';

@Injectable({
  providedIn: 'root',
})
export class PhilhealtApiService {
  constructor(
    private httpClient: HttpClient,
    private phicHelperService: PhilhealthHelperService
  ) {}

  getMemberDetails() {
    return of(true);
  }

  isClaimEligible(claimDetails: ClaimDetails) {
    let errors = this.phicHelperService._validateDataformat(claimDetails);
    if (errors.length > 0) return throwError({ errors });
    else if (claimDetails.pPIN === '123456') return of(IS_CLAIM_ELIGIBLE_YES);
    else return throwError(IS_CLAIM_ELIGIBLE_NO);
  }

  getMemberPIN(pvuDetails: PVU) {
    if (pvuDetails.pMemberFirstName === 'Juan')
      return of({ pPIN: '19-0000220202' });
    else if (pvuDetails.pMemberFirstName === 'Duplicate')
      return throwError({
        error:
          'MULTIPLE RECORDS FOUND. PLEASE PROCEED TO ANY PHILHEALTH OFFICE FOR PIN CLEANUP',
      });
    else
      return throwError({
        error:
          'NO RECORD FOUND. REGISTER ONLINE OR PROCEED TO ANY PHILHEALTH OFFICE ',
      });
  }

  getMemberDetailsByPIN(pin: string) {
    return of(MASTERLIST.find((o) => o.pin === pin));
  }

  getMasterlist(query?: any) {
    return of({ records: MASTERLIST, total: MASTERLIST.length });
  }

  updateMasterlist(returnErr?: boolean) {
    if (returnErr)
      return throwError({
        message: 'Unable to update masterlist. Cannot connect to Phic Server.',
        status: 500,
      });
    return of({
      message: 'Masterlist Successfully Updated.',
      lastUpdate: new Date(),
      status: 200,
    });
  }

  getLastUpdate() {
    return of({ lastUpdate: new Date() });
  }
}
