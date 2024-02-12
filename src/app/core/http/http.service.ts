import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpMethod } from '../interfaces/HttpMethod.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  get headers() {
    const authToken = localStorage.getItem('auth');

    const headers = new HttpHeaders({
      authorization: `Bearer ${authToken}`,
    });
    return { headers };
  }

  start<T>(
    method: HttpMethod,
    endpoint: string,
    body?: any,
    query?: Record<string, any>,
  ) {
    const option = this.headers;

    const url = `${environment.API_URL}${endpoint}`;
    const queryParams = new HttpParams({
      fromObject: query,
    });

    switch (method) {
      case 'get': // get
        return this.http.get<T>(url, { ...option, params: queryParams });

      case 'post': // insert
        return this.http.post<T>(url, body, option);

      case 'put': // update all
        return this.http.put<T>(url, body, option);

      case 'patch': // update some
        return this.http.patch<T>(url, body, option);

      case 'delete': // delete
        return this.http.delete<T>(url, option);

      default:
        return this.http.get<T>(url, option);
    }
  }
}
