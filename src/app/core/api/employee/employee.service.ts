import { Injectable } from '@angular/core';
import { STATUS } from '@core/constants/STATUS.constant';
import { HttpService } from '@core/http/http.service';
import { TableResponse } from '@core/interfaces/TableResponse.interface';
import { User } from '@core/interfaces/models/User.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpService) {}

  createEmployee(body: User) {
    return this.http.start<User>('post', `/employees`, body);
  }

  updateEmployee(body: User, employeeId: string) {
    return this.http.start<User>('put', `/employees/${employeeId}`, body);
  }

  patchEmployeeStatus(status: STATUS, employeeId: string) {
    return this.http.start<User>('patch', `/employees/${employeeId}/status`, {
      status,
    });
  }

  getEmployees(query: Record<string, string | number>) {
    return this.http.start<TableResponse<User>>('get', `/employees`, {}, query);
  }

  getEmployee(employeeId: string) {
    return this.http.start<User>('get', `/employees/${employeeId}`);
  }
}
