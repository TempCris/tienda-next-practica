// -------------------------------------------TYPES------------------------------------
import {
  UPDATE_PARAMS,
  CHANGE_RESPONSIVE,
  UPDATE_PATH,
  UPDATE_LOADING
} from '@Redux/appInfo/types';
import { Action, ReducerState, ResponsiveData } from '@Redux/appInfo/customTypes';
import { RandObj } from '@Declarations';

// ------------------------------------------REDUCER-----------------------------------

// -------------------------------------------STATE------------------------------------
const INITIAL_STATE: ReducerState = {
  isMovil: false,
  winSize: 'lg',
  isLoading: false,
  currentPath: '',
  currentParams: {}
};

// ------------------------------------------REDUCER-----------------------------------
const reducer = (state = INITIAL_STATE, action: Action) : ReducerState => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_RESPONSIVE:
      return {
        ...state,
        isMovil: (payload as ResponsiveData).isMovil,
        winSize: (payload as ResponsiveData).winSize
      };

    case UPDATE_PATH:
      return {
        ...state,
        currentPath: <string>payload
      };

    case UPDATE_PARAMS:
      return {
        ...state,
        currentParams: <RandObj>payload
      };

    case UPDATE_LOADING:
      return {
        ...state,
        isLoading: <boolean>payload
      };

    default:
      return state;
  }
};

export default reducer;
