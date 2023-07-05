export interface RegisterRequest {
  user: {
    email: string;
    password: string;
    username: string;
  }
}

export interface AuthState {
  isSubmitting: boolean;
}
