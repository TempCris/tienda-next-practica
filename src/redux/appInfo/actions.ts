// -------------------------------------------TYPES------------------------------------
import {
  UPDATE_PARAMS,
  CHANGE_RESPONSIVE,
  UPDATE_PATH,
  UPDATE_LOADING
} from '@Redux/appInfo/types';
import { Dispatch } from 'redux';
import { RandObj } from '@Declarations';
import { ResponsiveData } from '@Redux/appInfo/customTypes';

// -------------------------------------------ACTIONS------------------------------------
export const changeResponsiveFlag = (data: ResponsiveData) => (dispatch: Dispatch) : void => {
  dispatch({
    type: CHANGE_RESPONSIVE,
    payload: data
  });
};

export const updatePath = (newPath: string) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_PATH,
    payload: newPath
  });
};

export const updateParams = (newParam: RandObj) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_PARAMS,
    payload: newParam
  });
};

export const updateLoading = (flag: boolean) => (dispatch: Dispatch) : void => {
  dispatch({
    type: UPDATE_LOADING,
    payload: flag
  });
};
