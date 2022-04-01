
export interface AuthStateModel {
  user: UserModel;
  isConnected: boolean;
  isSignedUp: boolean,
  error: any;
  isLoading: boolean;
  verifyEmail?: boolean;
  resendCode?: boolean;
}

export interface UserModel{
  authData?: AuthDataModel;
  signUpData?: SignUpDataModel;
}

export interface AuthDataModel {
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
  };
}

export interface SignUpDataModel {

}

export interface AuthModel {
  username: string;
  email: string;
  password: string;
  phone_number: string;
}

export interface LoginModel {
  username: string;
  password: string;
}

export interface VerificationModel { 
  username: string; 
  v_code: string;
}