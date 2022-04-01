export interface AppStateModel {
  dimensions: DimensionsModel;
  menuIsOpen: boolean;
}

export interface DimensionsModel {
  width?: number;
  height?: number;
  isLandscape?: boolean;
};

export const SET_DIMENSIONS = '[App] set new Dimensions';
export const TOGGLE_MENU = '[App] toggle Menu';

const setDimensions = (dimensions: DimensionsModel) => ({type: SET_DIMENSIONS, payload: {...dimensions}});
const toggleMenu = () => ({type: TOGGLE_MENU});

export default {
  setDimensions,
  toggleMenu
};