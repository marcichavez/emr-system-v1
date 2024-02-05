import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationHelperService {
  constructor() {}

  fullAddress(address1: any, brgy: any, citymun: any, prov: any, reg: any) {
    var a = address1 ? address1 + ' ' : '';
    var b = brgy ? brgy.brgyDesc + ', ' : '';
    var c = citymun ? citymun.citymunDesc + ', ' : '';
    var p = prov ? prov.provDesc + ', ' : '';
    var r = reg ? reg.regDesc : '';
    return a + b + c + p + r;
  }
}
