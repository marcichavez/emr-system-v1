import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  url: string = 'assets/json/ph-locations';

  constructor(private http: HttpClient) {}

  getRegions() {
    return this.http.get(this.url + '/region.json');
  }

  getProvince() {
    return this.http.get(this.url + '/province.json');
  }

  getCityMuns() {
    return this.http.get(this.url + '/city.json');
  }

  getBarangays() {
    return this.http.get(this.url + '/barangay.json');
  }
}
