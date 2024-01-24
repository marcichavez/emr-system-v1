import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ClaimDetails } from '../../interfaces/philhealth/ClaimDetails.interface';

@Injectable({
  providedIn: 'root',
})
export class PhilhealtApiService {
  constructor(private httpClient: HttpClient) {}

  getMemberDetails() {
    return of(true);
  }

  isClaimEligible(claimDetails: ClaimDetails) {}

  private _validateDataformat(claimDetails: ClaimDetails) {}
}
