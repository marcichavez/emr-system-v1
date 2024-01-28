import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FAKE_PATIENTS } from '../../mocks/data/patients';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientApiService {
  constructor(private httpClient: HttpClient) {}

  getPatients(query?: any) {
    return of({ records: FAKE_PATIENTS, total: FAKE_PATIENTS.length });
  }

  createPatient(patient: any) {
    return of({ patient });
  }
}
