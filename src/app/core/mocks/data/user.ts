import { STATUS } from '../../constants/STATUS.constant';
import { USER_TYPE } from '../../constants/USER_TYPE.constant';
import { User } from '../../interfaces/models/User.interface';

export const FAKE_USER = {
  firstName: 'Joaquin',
  lastName: 'Guillermo',
  email: 'joaquinguillermom@gmail.com',
  password: '123456789',
  age: 32,
  dob: new Date(1990, 12, 4),
  isClinician: true,
  specialization: 'Cardiologist',
  mobileNo: '09XXXXXXXXX',
  sex: 'Male',
  type: 'User',
};

export const MOCK_USER: User = {
  _id: '1',
  firstName: 'Joaquin',
  lastName: 'Guillermo',
  email: 'joaquinguillermom@gmail.com',
  occupation: 'Cardiologist',
  isClinician: false,
  status: STATUS.ACTIVE,
  userType: USER_TYPE.ADMIN,
  _tenantId: '123',
  createdAt: '2022-04-22T05:53:32.192+00:00',
  updatedAt: '2022-06-14T03:59:46.239+00:00',
};
