import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhLocationService {
  url: string = 'assets/json/ph-locations';

  constructor(private http: HttpClient) {}

  getRegions() {
    return this.http.get(this.url + '/regions.json');
  }

  getProvince() {
    return this.http.get(this.url + '/provinces.json');
  }

  getCityMuns() {
    return this.http.get(this.url + '/city-mun.json');
  }

  getBarangays() {
    return this.http.get(this.url + '/barangays.json');
  }
}
