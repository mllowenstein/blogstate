import { createAction, props } from '@ngrx/store';
import { RegisterRequest } from '../models/auth.model';

export const register = createAction(
  '[Auth] Register',
  props<{request: RegisterRequest}>(),
);
