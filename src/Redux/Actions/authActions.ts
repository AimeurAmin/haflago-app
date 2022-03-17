import { AuthModel, LoginModel } from '../Models/AuthModel';
import AuthService from "../Services/authService";

export const AUTH_REQUEST = '[AUTH] AUTH REQUEST';
export const LOGIN_SUCCESS = '[AUTH] LOGIN SUCCESS';
export const SIGNUP_SUCCESS = '[AUTH] SIGNUP SUCCESS';
export const EMAIL_VERIFICATION_SUCCESS = '[AUTH] EMAIL VERIFICATION SUCCESS';
export const RESEND_VERIFICATION_SUCCESS = '[AUTH] RESEND VERIFICATION SUCCESS';
export const LOGIN_FAIL = '[AUTH] LOGIN FAIL';
export const SIGNUP_FAIL = '[AUTH] SIGNUP FAIL';
export const EMAIL_VERIFICATION_FAIL = '[AUTH] EMAIL VERIFICATION FAIL';
export const RESEND_VERIFICATION_FAIL = '[AUTH] RESEND VERIFICATION FAIL';
export const LOGOUT = '[AUTH] LOGOUT';


const toggleRequest = (reqState: boolean) => ({ type: AUTH_REQUEST, payload: reqState });

const loginSuccess = (authData: any) => ({ type: LOGIN_SUCCESS, payload: authData });
const loginFail = (error: any) => ({ type: LOGIN_FAIL, payload: error });

const signUpSuccess = (signUpData: any) => ({ type: SIGNUP_SUCCESS, payload: signUpData });
const signUpFail = (error: any) => ({ type: SIGNUP_FAIL, payload: error });

const verificationSuccess = () => ({ type: EMAIL_VERIFICATION_SUCCESS });
const verificationFail = (error: any) => ({ type: EMAIL_VERIFICATION_FAIL, payload: error });

const resendCodeSuccess = () => ({ type: RESEND_VERIFICATION_SUCCESS });
const resendCodeFail = (error: any) => ({ type: RESEND_VERIFICATION_FAIL, payload: error });

const disconnect = () => ({ type: LOGOUT });

const authService = new AuthService();

/**
 * Signup a new user
 * 
 * @param userData 
 * @returns 
 */
export const signUp = (userData: AuthModel) => async (dispatch: any, ) => {
  dispatch(toggleRequest(true));

  authService.signup(userData).then((res: any) => { 
      console.log('res### signup');
      console.log(res);
      
      dispatch(toggleRequest(false));
      dispatch(signUpSuccess(res.data));

    }).catch((error: any) => {

      dispatch(toggleRequest(false));
      const errorJSON = JSON.parse(JSON.stringify(error));
      dispatch(signUpFail({data: {...errorJSON}, status: errorJSON.status}));

    });
}

/**
 * Login user using email / username
 * 
 * @param userData 
 * @returns 
 */
export const login = (userData: LoginModel) => async (dispatch: any, ) => {
  dispatch(toggleRequest(true));

  authService.signin(userData).then((res: any) => {

      dispatch(toggleRequest(false));
      dispatch(loginSuccess(res.data));

    }).catch((error: any) => {

      dispatch(toggleRequest(false));
      const errorJSON = JSON.parse(JSON.stringify(error));
      dispatch(loginFail({data: {...errorJSON}, status: errorJSON.status}));

    });
}

/**
 * Verifies user account
 * 
 * @param userData 
 * @returns 
 */
export const validateEmail = (userData: {username: string, v_code: string}) => async (dispatch: any) => {
  dispatch(toggleRequest(true));

  authService.verifyEmail(userData).then(() => {

    dispatch(verificationSuccess());
    dispatch(toggleRequest(false));

  }).catch((error) => {
    dispatch(verificationFail(error));
    dispatch(toggleRequest(false));
  });

}

/**
 * Resends account verification code
 * 
 * @param username 
 * @returns 
 */
export const resendVerificationCode  = (username: string) => async (dispatch: any) => {
  dispatch(toggleRequest(true));

  authService.ressendVerification(username).then(() => {

    dispatch(toggleRequest(false));
    dispatch(resendCodeSuccess());

  }).catch((error) => {

    dispatch(toggleRequest(false));
    dispatch(resendCodeFail(error));

  });
}

/**
 * Logout from current user account
 * 
 * @returns 
 */
export const logout = () => (dispatch: any) => {
  dispatch(toggleRequest(true));
  authService.logout().then(() => dispatch(disconnect())).catch((error) => dispatch(disconnect()));
  ;
}