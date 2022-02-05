
export interface AuthStateModel {
  user: UserModel;
  isConnected: boolean;
  error: any;
  isLoading: boolean;
}

export interface UserModel{
  idToken?: {
    jwtToken: string;
    payload: {
        email_verified: boolean;
        phone_number_verified: boolean;
        phone_number: string;
        exp: number;
        email: string
    }
  };
  refreshToken?: {
      token: string
  };
  accessToken?: {
      jwtToken: string;
      payload: {
          exp: number;
          username: string
      }
  }
}

export interface AuthModel {
  username: string;
  email: string;
  password: string;
  phone_number: string;
}
