import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectUserState = createFeatureSelector<AppState>('user');

export const selectUser = createSelector(
  selectUserState,
  (state) => state.user,
);
