import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { startWith, debounceTime, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class IcdApiService {
  url: string = 'assets/json';

  constructor(private http: HttpClient) {}

  getICDCodesByKeyword(keyword: string) {
    var lowerKeyword = keyword.toLowerCase();
    return this.http.get(this.url + '/icd_10.json').pipe(
      startWith(''),
      debounceTime(1000),
      map((res: any) => {
        res = res.filter(
          (o: any) =>
            o.code.toLowerCase().includes(lowerKeyword) ||
            o.desc.toLowerCase().includes(lowerKeyword)
        );
        return res.slice(0, 20) || [];
      })
    );
  }
}
