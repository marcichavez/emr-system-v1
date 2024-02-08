import { User } from '@core/interfaces/models/User.interface';
import { createAction, props } from '@ngrx/store';

export const UserActions = {
  setUser: createAction('[User] Set User', props<{ user: User }>()),
  removeUser: createAction('[User] Remove User'),
};
