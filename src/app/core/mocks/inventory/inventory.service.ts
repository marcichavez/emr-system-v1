import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { startWith, map, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  url: string = 'assets/json';

  constructor(private http: HttpClient) {}

  getMedicinesByKeyword(keyword: string) {
    var lowerKeyword = keyword.toLowerCase();
    return this.http.get(this.url + '/medicines.json').pipe(
      startWith(''),
      debounceTime(1000),
      map((res: any) => {
        res = res.filter((o: any) =>
          o.genericName.toLowerCase().includes(lowerKeyword)
        );
        return res.slice(0, 20) || [];
      })
    );
  }
}
