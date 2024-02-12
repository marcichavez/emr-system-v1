import { Injectable } from '@angular/core';
import { STATUS } from '@core/constants/STATUS.constant';
import { HttpService } from '@core/http/http.service';
import { TableResponse } from '@core/interfaces/TableResponse.interface';
import { User } from '@core/interfaces/models/User.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpService) {}

  createUser(body: User) {
    return this.http.start<User>('post', `/users`, body);
  }

  updateUser(body: User, userId: string) {
    return this.http.start<User>('put', `/users/${userId}`, body);
  }

  patchUserStatus(status: STATUS, userId: string) {
    return this.http.start<User>('patch', `/users/${userId}/status`, {
      status,
    });
  }

  getUsers(query: Record<string, string | number>) {
    return this.http.start<TableResponse<User>>('get', `/users`, {}, query);
  }

  getUser(userId: string) {
    return this.http.start<User>('get', `/users/${userId}`);
  }
}
