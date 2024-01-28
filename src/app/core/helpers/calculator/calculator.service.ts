import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  now = new Date();
  constructor() {}

  ageBreakdown(dob: Date, now?: Date) {
    now = now || this.now;
    var yearNow = now.getFullYear();
    var monthNow = now.getMonth();
    var dateNow = now.getDate();

    var yearDob = dob.getFullYear();
    var monthDob = dob.getMonth();
    var dateDob = dob.getDate();

    var yearAge = yearNow - yearDob;

    if (monthNow >= monthDob) var monthAge = monthNow - monthDob;
    else {
      yearAge--;
      var monthAge = 12 + monthNow - monthDob;
    }

    if (dateNow >= dateDob) var dateAge = dateNow - dateDob;
    else {
      monthAge--;
      var temp = new Date(yearNow, monthDob + 1, 1);
      temp.setDate(temp.getDate() - 1);
      var maxDate = temp.getDate();
      var dateAge = maxDate + dateNow - dateDob;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    return {
      years: yearAge,
      months: monthAge,
      days: dateAge,
    };
  }
}
