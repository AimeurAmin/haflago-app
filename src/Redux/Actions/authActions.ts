import { AuthModel, UserModel } from '../Models/AuthModel';
import AuthService from "../Services/authService";

export const SING_UP = '[AUTH] SING UP';
export const AUTH_REQUEST = '[AUTH] REQUEST';
export const AUTH_SUCCESS = '[AUTH] SUCCESS';
export const AUTH_FAIL = '[AUTH] FAIL';

const toggleRequest = (reqState: boolean) => ({ type: AUTH_REQUEST, payload: reqState});
const success = (data: any) => ({ type: AUTH_SUCCESS, payload: data});
const fail = (error: any) => ({ type: AUTH_FAIL, payload: error});

export const signUp = (userData: AuthModel) => async (dispatch: any, ) => {
  
  dispatch(toggleRequest(true));

  const authService = new AuthService();
  console.log('here2');
    authService.signup(userData)
    .then(
      (res: any) => {        
        console.log('###res###');
        console.log(res);
        dispatch(success(res))
        if(res.status === 200) {
        }
      })
    .catch(
      (error: any) => {

        const errorJSON = JSON.parse(JSON.stringify(error));
        dispatch(fail({data: {...errorJSON}, status: errorJSON.code}));
      }
    );

}