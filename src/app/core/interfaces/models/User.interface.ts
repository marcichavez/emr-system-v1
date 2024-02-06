import { STATUS } from '../../constants/STATUS.constant';
import { USER_TYPE } from '../../constants/USER_TYPE.constant';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  occupation: string;
  isClinician: boolean;
  status: STATUS;
  userType: USER_TYPE;
  _tenantId: string;
  createdAt: string;
  updatedAt: string;
}
