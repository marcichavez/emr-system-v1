import { UpsertEmployeeConfig } from './upsert-employee.component';

export const UPSERT_EMPLOYEE_CONFIG: Record<string, UpsertEmployeeConfig> = {
  UPDATE: {
    title: 'Update Employee',
    confirmationDialog: {
      title: 'Update Employee Confirmation',
      message: 'Are you sure you want to update this employee?',
    },
  },
  CREATE: {
    title: 'Create Employee',
    confirmationDialog: {
      title: 'Create Employee Confirmation',
      message: 'Are you sure you want to create this employee?',
    },
  },
};
