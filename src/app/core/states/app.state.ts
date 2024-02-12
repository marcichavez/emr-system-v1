import { User } from '@core/interfaces/models/User.interface';
import { userReducer } from './user/user.reducer';

export interface AppState {
  user: User;
}

export const appState = {
  user: userReducer,
};
