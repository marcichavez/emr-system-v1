import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpMethod } from '../interfaces/HttpMethod.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  get headers() {
    var session_token = localStorage.getItem('SESSION_TOKEN');
    var bearer_token = localStorage.getItem('SESSION_AUTH');

    var headers = new HttpHeaders({
      s_auth: session_token || '',
      authorization: `Bearer ${bearer_token}` || '',
    });
    return { headers };
  }

  start<T>(method: HttpMethod, endpoint: string, body?: any) {
    var option = {
      withCredentials: true,
      ...this.headers,
    };

    switch (method) {
      case 'get': // get
        return this.http.get<T>(endpoint, option);

      case 'post': // insert
        return this.http.post<T>(endpoint, body, option);

      case 'put': // update all
        return this.http.put<T>(endpoint, body, option);

      case 'patch': // update some
        return this.http.patch<T>(endpoint, body, option);

      case 'delete': // delete
        return this.http.delete<T>(endpoint, option);

      default:
        return this.http.get<T>(endpoint, option);
    }
  }
}
