import { AuthStateModel, UserModel } from '../Models/AuthModel';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAIL } from '../Actions/authActions';



const initialState: AuthStateModel = {
  user: {},
  isConnected: false,
  error: undefined,
  isLoading: false
};

const AuthReducer = (state = initialState, action: {type: string; payload: any}) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: undefined
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        isConnected: true,
        isLoading: false,
        user: {...action.payload},
        error: undefined
      };

    case AUTH_FAIL:
      console.log('action.payload error');
      console.log(action.payload);
            
      return {
        isConnected: false,
        isLoading: false,
        error: action.payload,
        user: undefined
      };
    default:
      return state;
  }
}

export default AuthReducer;