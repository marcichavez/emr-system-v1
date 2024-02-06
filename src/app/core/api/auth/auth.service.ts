import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../../interfaces/models/User.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // setHeaders() {
  //   let session_token = localStorage.getItem('SESSION_TOKEN')!;
  //   let bearer_token = localStorage.getItem('SESSION_AUTH');

  //   let headers = new HttpHeaders({
  //     s_auth: session_token || '',
  //     authorization: `Bearer ${bearer_token}` || '',
  //   });
  //   return { headers };
  // }

  // getHeaders() {
  //   return {
  //     withCredentials: true,
  //     ...this.setHeaders(),
  //   };
  // }

  login(email: string, password: string, type: string) {
    return this.http.post(environment.API_URL + `/auth/login/${type}`, {
      email,
      password,
    });
  }

  superAdminLogin(email: string, password: string) {
    return this.http.post<User & { token: string }>(
      environment.API_URL + `/auth/super-admin/login`,
      { email, password },
    );
  }

  logout() {
    return this.http.get(environment.API_URL + '/auth/logout');
  }

  me() {
    return this.http.get(environment.API_URL + '/auth/me');
  }

  verifyResetPassToken(token: string) {
    return this.http.get(environment.API_URL + `/auth/reset-password/${token}`);
  }

  resetPassword(token: string, body: object) {
    return this.http.put(
      environment.API_URL + `/auth/reset-password/${token}`,
      body,
    );
  }

  forgotPassword(email: string) {
    return this.http.post(environment.API_URL + `/auth/forgot-password`, {
      email,
    });
  }

  updatePassword(body: object) {
    return this.http.put(environment.API_URL + '/auth/update-password', body);
  }
}
