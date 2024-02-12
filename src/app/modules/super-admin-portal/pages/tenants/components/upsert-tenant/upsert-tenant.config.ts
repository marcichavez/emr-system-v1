import { UpsertTenantConfig } from './upsert-tenant.component';

export const UPSERT_TENANT_CONFIG: Record<string, UpsertTenantConfig> = {
  UPDATE: {
    title: 'Update Tenant',
    confirmationDialog: {
      title: 'Update Tenant Confirmation',
      message: 'Are you sure you want to update this tenant?',
    },
  },
  CREATE: {
    title: 'Create Tenant',
    confirmationDialog: {
      title: 'Create Tenant Confirmation',
      message: 'Are you sure you want to create this tenant?',
    },
  },
};
