import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@core/interfaces/models/User.interface';
import { UserActions } from '@core/states/user';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private store: Store,
  ) {}

  superAdminLogin(email: string, password: string) {
    return this.http
      .post<
        User & { token?: string }
      >(environment.API_URL + `/auth/super-admin/login`, { email, password })
      .pipe(
        tap((response) => {
          localStorage.setItem('auth', response.token || '');
          delete response.token;

          this.store.dispatch(
            UserActions.setUser({
              user: response,
            }),
          );
        }),
      );
  }

  logout() {
    return this.http.get(environment.API_URL + '/auth/logout').pipe(
      tap(() => {
        localStorage.removeItem('auth');
        this.store.dispatch(UserActions.removeUser());
      }),
    );
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
