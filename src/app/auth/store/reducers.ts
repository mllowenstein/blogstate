import { createFeature, createReducer, on } from '@ngrx/store';
import { AuthState } from '../models/auth.model';
import { register } from './actions';

const initialState: AuthState = {
  isSubmitting: false,
};

const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
    initialState,
    on(register, (state) => ({...state, isSubmitting: true})),
  ),
});

export const {
  name: authFeatureKey,
  reducer: authReducer,
} = authFeature;
