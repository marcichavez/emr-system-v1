import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CalculatorService } from 'src/app/core/helpers/calculator/calculator.service';
import { LocationsService } from 'src/app/core/mocks/locations/locations.service';

@Component({
  selector: 'app-s2-patient-details',
  templateUrl: './s2-patient-details.component.html',
  styleUrls: ['./s2-patient-details.component.scss'],
})
export class S2PatientDetailsComponent implements OnInit {
  @Input() form: FormGroup = new FormGroup({});
  address: FormGroup = new FormGroup({});
  regions: any[] = [];
  provinces: any[] = [];
  citymuns: any[] = [];
  barangays: any[] = [];

  age = {
    years: 0,
    months: 0,
    days: 0,
  };

  constructor(
    private ph: LocationsService,
    private calc: CalculatorService,
  ) {}

  ngOnInit(): void {
    this.ph.getRegions().subscribe((o: any) => {
      this.regions = o;
    });

    this.form.get('dob')?.valueChanges.subscribe((o) => {
      var ageBreakdown = this.calc.ageBreakdown(new Date(o));
      this.age = ageBreakdown;
      this.form.get('age')?.setValue(ageBreakdown.years);
      // console.log({ age: this.age, dob: this.summary['profile'].dob });
    });

    this.address = this.form.get('address') as FormGroup;
  }

  regSelected() {
    var o = this.address?.get('reg')?.value;
    console.log(o);
    if (!o) return;
    this.address?.get('prov')?.reset();
    this.address?.get('cityMun')?.reset();
    this.address?.get('brgy')?.reset();
    this.ph.getProvince().subscribe((provs: any) => {
      this.provinces = provs.filter((f: any) => f.regCode === o.regCode);
    });
  }

  provSelected() {
    var o = this.address?.get('prov')?.value;
    if (!o) return;
    this.address?.get('cityMun')?.reset();
    this.address?.get('brgy')?.reset();
    this.ph.getCityMuns().subscribe((citymuns: any) => {
      this.citymuns = citymuns.filter((f: any) => f.provCode === o.provCode);
    });
  }

  citymunSelected() {
    var o = this.address?.get('cityMun')?.value;
    if (!o) return;
    this.address?.get('brgy')?.reset();
    this.ph.getBarangays().subscribe((brgys: any) => {
      this.barangays = brgys.filter(
        (f: any) => f.citymunCode === o.citymunCode,
      );
    });
  }

  displayFn(loc: any): string {
    if (!loc) return '';
    if (loc.brgyDesc) return loc.brgyDesc;
    if (loc.citymunDesc) return loc.citymunDesc;
    if (loc.provDesc) return loc.provDesc;
    if (loc.regDesc) return loc.regDesc;
    return '';
  }
}
