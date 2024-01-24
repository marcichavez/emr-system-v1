import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL } from 'src/app/configs/url/url';
import { Observable, of, throwError } from 'rxjs';
import { FAKE_USER } from '../data/user';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FakeAuthService {
  constructor(private http: HttpClient) {}

  setHeaders() {
    let session_token = localStorage.getItem('SESSION_TOKEN')!;
    let bearer_token = localStorage.getItem('SESSION_AUTH');

    let headers = new HttpHeaders({
      s_auth: session_token || '',
      authorization: `Bearer ${bearer_token}` || '',
    });
    return { headers };
  }

  getHeaders() {
    return {
      withCredentials: true,
      ...this.setHeaders(),
    };
  }

  login(email: string, password: String) {
    let res: any = {};
    if (email === 'test@email.com' && password === 'test123') {
      let user = FAKE_USER;
      res = {
        user,
        session_token: 'FAKEXSESSIONXTOKEN',
        token: 'FAKEXTOKEN',
      };
      return of(res);
    } else {
      res = {
        error: {
          message: 'Incorrect Credential',
          status: 404,
        },
      };
      return throwError(res);
    }
  }

  logout() {
    let res = { env: { message: 'Successfull Logout' } };
    return of(res);
  }

  me() {
    return this.http.get(URL + '/auth/me', this.getHeaders());
  }

  verifyResetPassToken(token: string) {
    return this.http.get(
      URL + `/auth/reset-password/${token}`,
      this.getHeaders()
    );
  }

  resetPassword(token: string, body: object) {
    return this.http.put(
      URL + `/auth/reset-password/${token}`,
      body,
      this.getHeaders()
    );
  }

  forgotPassword(email: string) {
    return this.http.post(URL + `/auth/forgot-password`, { email });
  }

  updatePassword(body: object) {
    return this.http.put(
      URL + '/auth/update-password',
      body,
      this.getHeaders()
    );
  }
}
