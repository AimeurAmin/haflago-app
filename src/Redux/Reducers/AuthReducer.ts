import { AuthStateModel, UserModel } from '../Models/AuthModel';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL, EMAIL_VERIFICATION, validateEmail, RESET } from '../Actions/authActions';



const initialState: AuthStateModel = {
  user: undefined,
  isConnected: false,
  error: undefined,
  isLoading: false,
  verifyEmail: undefined
};

const AuthReducer = (state = initialState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
        error: undefined
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        isConnected: true,
        user: {...action.payload},
        error: undefined
      };

    case AUTH_FAIL:
      console.log('action.payload error');
      console.log(action.payload);
            
      return {
        isConnected: false,
        error: {...action.payload},
        user: undefined
      };

    case EMAIL_VERIFICATION: 
      console.log();
      return {
        ...state,
        verifyEmail: action.payload
      }

    case RESET:
      return {
        user: undefined,
        isConnected: false,
        error: undefined,
        isLoading: false,
        verifyEmail: undefined
      }
      
    default:
      return state;
  }
}

export default AuthReducer;