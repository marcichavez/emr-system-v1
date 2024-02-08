import { User } from '@core/interfaces/models/User.interface';
import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';

export const initialState: Readonly<User> = {} as User;

export const userReducer = createReducer<User>(
  initialState,
  on(UserActions.setUser, (_state, user): User => ({ ..._state, ...user })),
  on(UserActions.removeUser, (): User => ({}) as User),
);
