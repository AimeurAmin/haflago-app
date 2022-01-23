import ActionModel from '../Models/Action';
import { DimensionsModel, SET_DIMENSIONS, AppStateModel, TOGGLE_MENU } from '../Actions/appActions';



const initialState: AppStateModel = {
  dimensions: {
    width: 0,
    height: 0,
    isLandscape: true,
  },
  menuIsOpen: false,
},

AppReducer = (state: AppStateModel = initialState, action: ActionModel) => {
  switch (action.type) {
    case SET_DIMENSIONS:
      return {...state, dimensions: action.payload};
  
    case TOGGLE_MENU:
      return {...state, menuIsOpen: !state.menuIsOpen};

    default:
      return state;
  }
};

export default AppReducer;