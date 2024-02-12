import { TestBed } from '@angular/core/testing';

import { PhilhealthHelperService } from './philhealth-helper.service';
import { ClaimDetails } from '../../interfaces/philhealth/ClaimDetails.interface';

describe('PhilhealthHelperService', () => {
  let service: PhilhealthHelperService;

  var claimDetails: ClaimDetails = {
    pUserName: 'YourFacilityUserName',
    pUserPassword: 'YourFacilityPassword',
    pHospitalCode: 'YourHospitalCode',

    pPIN: '123456789111',
    pMemberLastName: 'Doe',
    pMemberFirstName: 'John',
    pMemberMiddleName: 'Robert',
    pMemberSuffix: 'Jr',
    pMemberBirthDate: new Date('1990-05-15'),
    pMailingAddress: '123 Main St',
    pZipCode: '1234',
    pPatientIs: 'M',

    pAdmissionDate: new Date('2022-01-01'),
    pDischargeDate: new Date('2022-01-15'),

    pPatientLastName: 'Doe',
    pPatientFirstName: 'Jane',
    pPatientMiddleName: 'Marie',

    pPatientSuffix: 'Sr',
    pPatientBirthDate: new Date('1985-08-20'),
    pPatientGender: 'F',

    pMemberShipType: 'S',
    pPEN: 'YourPEN',
    pEmployerName: 'YourEmployerName',
    pRVS: '',
    pTotalAmountActual: 5000.0,
    pTotalAmountClaimed: 4500.0,
    pIsFinal: 0,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhilhealthHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#_validateDataformat should return no errors', () => {
    claimDetails.pPIN = '123456789111';
    expect(service._validateDataformat(claimDetails)).toHaveSize(0);
  });

  it('#_validateDataformat should return 1 error', () => {
    claimDetails.pPIN = '12345678911';
    expect(service._validateDataformat(claimDetails)).toHaveSize(1);
  });

  it('#_validateDataformat should return the first element as [Invalid PIN number format]', () => {
    claimDetails.pPIN = '12345678911';
    expect(service._validateDataformat(claimDetails)[0]).toBe(
      'Invalid PIN number format',
    );
  });
});
