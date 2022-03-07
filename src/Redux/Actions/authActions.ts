import { AuthModel, UserModel } from '../Models/AuthModel';
import AuthService from "../Services/authService";

export const SING_UP = '[AUTH] SING UP';
export const AUTH_REQUEST = '[AUTH] REQUEST';
export const AUTH_SUCCESS = '[AUTH] SUCCESS';
export const EMAIL_VERIFICATION = '[AUTH] EMAIL VERIFICATION';
export const AUTH_FAIL = '[AUTH] FAIL';
export const RESET = 'RESET';

const toggleRequest = (reqState: boolean) => ({ type: AUTH_REQUEST, payload: reqState});
const authSuccess = (data: any) => ({ type: AUTH_SUCCESS, payload: data});
const emailVerifySuccess = (verified: boolean) => ({type: EMAIL_VERIFICATION, payload: verified})
const fail = (error: any) => ({ type: AUTH_FAIL, payload: error});
const resetData = () => ({type: RESET});

const authService = new AuthService();

export const signUp = (userData: AuthModel) => async (dispatch: any, ) => {
  
  dispatch(toggleRequest(true));

  authService.signup(userData)
    .then((res: any) => { 
      
      
      dispatch(authSuccess(res));
      dispatch(toggleRequest(false));

    })
    .catch((error: any) => {

      dispatch(toggleRequest(false));
      const errorJSON = JSON.parse(JSON.stringify(error));
      dispatch(fail({data: {...errorJSON}, status: errorJSON.status}));
      
    });
}

export const login = (userData: any) => async (dispatch: any) => {
  dispatch(toggleRequest(true));
  console.log('userData');
  console.log(userData);
  
  authService.signin(userData)
    .then((res: any) => {
      console.log('res');
      console.log(res);
      dispatch(authSuccess(res));
      dispatch(toggleRequest(false))
    })
    .catch((err: any) => {
      dispatch(toggleRequest(false));
      const errorJSON = JSON.parse(JSON.stringify(err));
      dispatch(fail({ data: { ...errorJSON }, status: errorJSON.status }))
    });
}

export const validateEmail = (userData: {username: string, v_code: string}) => async (dispatch: any) => {
  dispatch(toggleRequest(true));

  authService.verifyEmail(userData).then((res: any) => {
    dispatch(emailVerifySuccess(true));
    dispatch(toggleRequest(false));

  }).catch((error: any) => {
    dispatch(emailVerifySuccess(false));
    dispatch(toggleRequest(false));
  });

}

export const resetDataAction = () => (dispatch: any) => {
  dispatch(resetData());
}