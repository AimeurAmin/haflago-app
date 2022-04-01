import { AuthStateModel, UserModel } from '../Models/AuthModel';
import { AUTH_REQUEST, EMAIL_VERIFICATION_SUCCESS, LOGIN_SUCCESS, SIGNUP_SUCCESS, RESEND_VERIFICATION_SUCCESS, LOGIN_FAIL, SIGNUP_FAIL, EMAIL_VERIFICATION_FAIL, RESEND_VERIFICATION_FAIL, LOGOUT } from '../Actions/authActions';



const initialState: AuthStateModel = {
  user: {
    authData: undefined,
    signUpData: undefined
  },
  isConnected: false,
  isSignedUp: false,
  error: undefined,
  isLoading: false,
  verifyEmail: undefined,
  resendCode: false
};

const AuthReducer = (state = initialState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      };

    case LOGIN_SUCCESS: 
      return {
        ...state,
        isConnected: true,
        user: {
          authData: {...action.payload}
        },
        error: undefined
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        signedUp: true,
        isConnected: false,
        user: {
          authData: {},
          signUpData: {...action.payload}
        },
        error: undefined
      };

    case EMAIL_VERIFICATION_SUCCESS: 
      return {
        ...state,
        verifyEmail: true,
        user: {
          authData: {},
          signUpData: {}
        },
        error: undefined
      }

    case RESEND_VERIFICATION_SUCCESS: 
      return {
        ...state,
        resendCode: true,
        error: undefined
      }

    case SIGNUP_FAIL:
      return {
        ...state,
        signedUp: false,
        isConnected: false,
        error: {...action.payload}
      };

    case EMAIL_VERIFICATION_FAIL: 
      return {
        ...state,
        verifyEmail: false,
        error: {...action.payload}
      }

    case RESEND_VERIFICATION_FAIL: 
      return {
        ...state,
        resendCode: false,
        error: {...action.payload}
      }

    case LOGOUT:
      return {
        user: {
          authData: {},
          signUpData: {}
        },
        isConnected: false,
        isSignedUp: false,
        error: undefined,
        isLoading: false,
        verifyEmail: undefined
      }
      
    default:
      return state;
  }
}

export default AuthReducer;