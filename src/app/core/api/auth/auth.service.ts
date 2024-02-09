import { HttpClient, HttpParams } from '@angular/common/http';
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

  login(email: string, password: string) {
    return this.http
      .post<
        User & { token?: string }
      >(environment.API_URL + `/auth/login`, { email, password })
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
    return this.http
      .post(
        environment.API_URL + '/auth/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('auth')}`,
          },
        },
      )
      .pipe(
        tap(() => {
          localStorage.removeItem('auth');
          this.store.dispatch(UserActions.removeUser());
        }),
      );
  }

  me() {
    return this.http
      .get<User>(environment.API_URL + '/auth/me', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth')}`,
        },
      })
      .pipe(
        tap((response) => {
          this.store.dispatch(
            UserActions.setUser({
              user: response,
            }),
          );
        }),
      );
  }

  verifyResetPasswordToken(token: string) {
    const queryParams = new HttpParams({
      fromObject: {
        token,
      },
    });
    return this.http.get<{
      found: boolean;
    }>(environment.API_URL + `/auth/reset-password`, {
      params: queryParams,
    });
  }

  resetPassword(body: object) {
    return this.http.post(environment.API_URL + `/auth/reset-password`, body);
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
